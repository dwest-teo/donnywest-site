const path = require('path');
const SWPrecacheWebpackPlugin = require('sw-precache-webpack-plugin');

module.exports = {
  webpack: (config, { dev }) => {
    const oldEntry = config.entry;

    config.entry = () => oldEntry().then(entry => {
      entry['main.js'].push(path.resolve('./utils/offline'));
      return entry;
    });

    // Enable only in Production
    if (!dev) {
      // Service Worker
      config.plugins.push(
        new SWPrecacheWebpackPlugin({
          cacheId: 'next-ss',
          filename: 'sw.js',
          minify: true,
          staticFileGlobsIgnorePatterns: [/\.next\//],
          staticFileGlobs: [
            // Precache all static files by default
            'static/**/*',
          ],
          runtimeCaching: [
            {
              handler: 'networkFirst',
              urlPattern: /^https?.*/,
            },
          ],
        })
      );
    }

    return config;
  },
};
