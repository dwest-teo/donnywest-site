const { parse } = require('url');
const { existsSync } = require('fs');
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

  if (match(req, '/sw.js')) {
    if (existsSync('./.next/sw.js')) {
      res.setHeader('Content-Type', 'text/javascript; charset=UTF-8');
      const file = getAsset('./.next/sw.js');
      return send(res, 200, file);
    }
  }

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
