/**
 * Main application entry point for the Webpack build pipeline.
 * This file acts as an orchestrator, importing all modular components
 * and stylesheets required for the website.
 * Webpack relies on this file to map the dependency graph and bundle the assets.
 */

// Importa gli stili globali; MiniCssExtractPlugin (in webpack.common.js)
// estrarrà questo CSS in un file dedicato 'css/style.css' nella cartella 'dist'
import '../css/style.css';

// Importa moduli funzionali specifici basati su ES6 modules.
// Ogni file è incapsulato e gestisce il proprio perimetro operativo.
import './cookie-consent.js';
import './language-switcher.js';
import './popup.js';