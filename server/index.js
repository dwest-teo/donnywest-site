const path = require('path');
const express = require('express');
const next = require('next');
const cache = require('./cache');

const dev = process.env.NODE_ENV !== 'production';
const app = next({ dev });
const handle = app.getRequestHandler();
const port = parseInt(process.env.PORT, 10) || 4000;

module.exports = app.prepare().then(() => {
  const server = express();

  server.get('/sw.js', (req, res) => res.sendFile(path.resolve('./.next/sw.js')));
  server.use(cache(app));
  server.get('*', (req, res) => handle(req, res));

  server.listen(port, err => {
    if (err) {
      throw err;
    }

    console.log(`> Ready on http://localhost:${port}`);
  });
});
