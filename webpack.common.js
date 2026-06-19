const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = {
  entry: {
    app: './js/app.js',
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    clean: true,
    filename: './js/app.js',
  },
  module: {
    rules: [
      {
        test: /\.css$/i,
        use: [MiniCssExtractPlugin.loader, "css-loader", "postcss-loader"],
      },
    ],
  },
  plugins: [
    new MiniCssExtractPlugin({ filename: "css/style.css" }),
    new HtmlWebpackPlugin({ template: './index.html', filename: 'index.html', minify: { collapseWhitespace: true, removeComments: true, removeRedundantAttributes: true, useShortDoctype: true } }),
    new HtmlWebpackPlugin({ template: './calendario.html', filename: 'calendario.html', minify: { collapseWhitespace: true, removeComments: true, removeRedundantAttributes: true, useShortDoctype: true } }),
    new HtmlWebpackPlugin({ template: './chiSiamo.html', filename: 'chiSiamo.html', minify: { collapseWhitespace: true, removeComments: true, removeRedundantAttributes: true, useShortDoctype: true } }),
    new HtmlWebpackPlugin({ template: './contatti.html', filename: 'contatti.html', minify: { collapseWhitespace: true, removeComments: true, removeRedundantAttributes: true, useShortDoctype: true } }),
    new HtmlWebpackPlugin({ template: './esoneri.html', filename: 'esoneri.html', minify: { collapseWhitespace: true, removeComments: true, removeRedundantAttributes: true, useShortDoctype: true } }),
    new HtmlWebpackPlugin({ template: './grazie.html', filename: 'grazie.html', minify: { collapseWhitespace: true, removeComments: true, removeRedundantAttributes: true, useShortDoctype: true } }),
    new HtmlWebpackPlugin({ template: './privacy.html', filename: 'privacy.html', minify: { collapseWhitespace: true, removeComments: true, removeRedundantAttributes: true, useShortDoctype: true } }),
    new HtmlWebpackPlugin({ template: './404.html', filename: '404.html', minify: { collapseWhitespace: true, removeComments: true, removeRedundantAttributes: true, useShortDoctype: true } }),
  ],
};
