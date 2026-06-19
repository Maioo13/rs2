/**
 * Webpack Development Configuration
 * Estende la configurazione comune fornendo impostazioni specifiche per l'ambiente
 * di sviluppo locale, ottimizzando l'esperienza del developer (DX) con server locale,
 * ricaricamento a caldo (HMR) e mappe di origine per il debug.
 */
const { merge } = require('webpack-merge');
const common = require('./webpack.common.js');

module.exports = merge(common, {
  // Imposta l'ambiente su 'development', disabilitando le minificazioni per velocizzare la build
  mode: 'development',
  // Genera source maps in-line per mappare il codice compilato al sorgente originale (facilita il debug)
  devtool: 'inline-source-map',

  // Configurazione del Webpack Dev Server
  devServer: {
    // Espone il server su tutte le interfacce di rete (necessario per ambienti come Replit o Docker)
    host: '0.0.0.0',
    // Porta in ascolto standard per l'ambiente di sviluppo
    port: 5000,
    // Permette richieste da qualsiasi host (bypass delle restrizioni CORS locali)
    allowedHosts: 'all',
    // Abilita il ricaricamento completo della pagina in caso di modifiche ai file non supportate da HMR
    liveReload: true,
    // Abilita l'Hot Module Replacement (HMR) per iniettare aggiornamenti senza ricaricare la pagina
    hot: true,
    // Disabilita l'apertura automatica del browser all'avvio del server
    open: false,
    // Definisce le directory da cui servire i file statici non processati da Webpack
    static: ['./', './data'],
  },
});
