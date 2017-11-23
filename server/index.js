const { parse } = require('url');
const micro = require('micro');
const send = require('micro').send;
const match = require('micro-route/match');
const next = require('next');
const getAsset = require('./get-asset');

const dev = process.env.NODE_ENV !== 'production';
const app = next({ dev });
const handle = app.getRequestHandler();
const port = parseInt(process.env.PORT, 10) || 4000;

const server = micro(async (req, res) => {
  const parsedUrl = parse(req.url, true);

  res.setHeader('Vary', 'Accept-Encoding');

  if (!dev && match(req, '/sw.js')) {
    res.setHeader('Content-Type', 'text/javascript; charset=UTF-8');
    const file = getAsset('./.next/sw.js');
    return send(res, 200, file);
  }

  // To handle queries/params:
  // const { query } = parsedUrl;
  // if (match(req, '/a')) {
  //   return app.render(req, res, '/b', query);
  // } else if (match(req, '/b')) {
  //   return app.render(req, res, '/a', query);
  // }

  return handle(req, res, parsedUrl);
});

app.prepare().then(() => {
  server.listen(port, err => {
    if (err) {
      throw err;
    }

    console.log(`> Ready on http://localhost:${port}`);
  });
});
