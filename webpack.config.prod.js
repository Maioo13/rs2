/**
 * Webpack Production Configuration
 * Estende la configurazione comune per la build finale di produzione.
 * Attiva le minificazioni di default e orchestra la copia fisica degli asset statici
 * non processati direttamente dal dependency graph (immagini, dati JSON, icone).
 */
const { merge } = require('webpack-merge');
const common = require('./webpack.common.js');
// Plugin per copiare file o intere directory direttamente nella cartella di build ('dist')
const CopyPlugin = require('copy-webpack-plugin');
const fs = require('fs');

// Definizione base dei pattern di copia per le risorse statiche essenziali
const copyPatterns = [
  { from: 'img', to: 'img' },
  { from: 'js/vendor', to: 'js/vendor' },
  { from: 'data', to: 'data' },
  { from: 'robots.txt', to: 'robots.txt' },
  { from: 'site.webmanifest', to: 'site.webmanifest' },
];

// Arricchimento condizionale dell'array di copia:
// Includiamo i file relativi alle icone (favicon/PWA) solo se fisicamente presenti nel filesystem
if (fs.existsSync('icon.svg')) { copyPatterns.push({ from: 'icon.svg', to: 'icon.svg' }); }
if (fs.existsSync('favicon.ico')) { copyPatterns.push({ from: 'favicon.ico', to: 'favicon.ico' }); }
if (fs.existsSync('icon.png')) { copyPatterns.push({ from: 'icon.png', to: 'icon.png' }); }

module.exports = merge(common, {
  // Imposta l'ambiente su 'production', abilitando ottimizzazioni interne di Webpack come il tree shaking e la minificazione di codice.
  mode: 'production',
  plugins: [
    // Inizializza il plugin con l'array di pattern costruito dinamicamente
    new CopyPlugin({
      patterns: copyPatterns,
    }),
  ],
});
