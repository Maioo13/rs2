const { merge } = require('webpack-merge');
const common = require('./webpack.common.js');
const CopyPlugin = require('copy-webpack-plugin');
const fs = require('fs');

const copyPatterns = [
  { from: 'img', to: 'img' },
  { from: 'css', to: 'css' },
  { from: 'js/vendor', to: 'js/vendor' },
  { from: 'data', to: 'data' },
  { from: 'robots.txt', to: 'robots.txt' },
  { from: 'site.webmanifest', to: 'site.webmanifest' },
];

if (fs.existsSync('icon.svg')) { copyPatterns.push({ from: 'icon.svg', to: 'icon.svg' }); }
if (fs.existsSync('favicon.ico')) { copyPatterns.push({ from: 'favicon.ico', to: 'favicon.ico' }); }
if (fs.existsSync('icon.png')) { copyPatterns.push({ from: 'icon.png', to: 'icon.png' }); }

module.exports = merge(common, {
  mode: 'production',
  plugins: [
    new CopyPlugin({
      patterns: copyPatterns,
    }),
  ],
});
