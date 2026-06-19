/**
 * PostCSS Configuration
 * Configura gli strumenti per la post-elaborazione del CSS, eseguiti tramite
 * 'postcss-loader' nella pipeline di Webpack.
 */
module.exports = {
  plugins: {
    // Integra Tailwind CSS come plugin di PostCSS, permettendo l'uso di @tailwind, @apply, ecc.
    tailwindcss: {},
    // Integra Autoprefixer per aggiungere automaticamente i vendor prefix necessari (-webkit, -moz, ecc.)
    // basandosi sulle regole standard di browserslist.
    autoprefixer: {},
  }
}
