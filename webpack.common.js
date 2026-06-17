const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: {
    app: './js/app.js',
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    clean: true,
    filename: './js/app.js',
  },
  plugins: [
    new HtmlWebpackPlugin({ template: './index.html', filename: 'index.html' }),
    new HtmlWebpackPlugin({ template: './calendario.html', filename: 'calendario.html' }),
    new HtmlWebpackPlugin({ template: './chiSiamo.html', filename: 'chiSiamo.html' }),
    new HtmlWebpackPlugin({ template: './contatti.html', filename: 'contatti.html' }),
    new HtmlWebpackPlugin({ template: './esoneri.html', filename: 'esoneri.html' }),
    new HtmlWebpackPlugin({ template: './grazie.html', filename: 'grazie.html' }),
    new HtmlWebpackPlugin({ template: './privacy.html', filename: 'privacy.html' }),
    new HtmlWebpackPlugin({ template: './404.html', filename: '404.html' }),
  ],
};
