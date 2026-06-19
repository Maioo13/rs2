/**
 * Webpack Common Configuration
 * Questa configurazione funge da base (base config) condivisa tra gli ambienti
 * di Development e Production. Definisce l'entry point, la pipeline di base per gli asset,
 * e la generazione dei file HTML statici.
 */
const path = require('path');
// Plugin per l'iniezione automatica dei bundle all'interno dei file HTML e la loro minificazione
const HtmlWebpackPlugin = require('html-webpack-plugin');
// Plugin per estrarre il CSS dal bundle JS e salvarlo in file CSS esterni (per cache e parallel loading)
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = {
  // Punto d'ingresso principale dell'applicazione
  entry: {
    app: './js/app.js',
  },
  output: {
    // Definizione della cartella di destinazione per la build finale
    path: path.resolve(__dirname, 'dist'),
    // Pulisce la cartella 'dist' prima di ogni nuova build
    clean: true,
    // Specifica il nome e il percorso del bundle JS generato
    filename: './js/app.js',
  },
  module: {
    rules: [
      {
        // Pipeline di caricamento per i file CSS
        test: /\.css$/i,
        // I loader vengono eseguiti da destra verso sinistra:
        // 1. postcss-loader: elabora Tailwind CSS e Autoprefixer
        // 2. css-loader: risolve gli @import e gli url()
        // 3. MiniCssExtractPlugin.loader: estrae il risultato in file .css separati
        use: [MiniCssExtractPlugin.loader, "css-loader", "postcss-loader"],
      },
    ],
  },
  plugins: [
    // Specifica il percorso del file CSS generato nella cartella 'dist'
    new MiniCssExtractPlugin({ filename: "css/style.css" }),

    // Istanziazione multipla di HtmlWebpackPlugin:
    // Ogni file HTML statico ha una propria istanza per la minificazione e
    // per garantire che i link agli script/stili vengano iniettati correttamente.
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
