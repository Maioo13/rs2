/**
 * Tailwind CSS Configuration File
 * Definisce i path di scansione per l'engine JIT (Just-In-Time) e registra
 * i plugin ufficiali utilizzati per estendere le utility di default.
 */
module.exports = {
  // Configura l'array "content" per indicare a Tailwind dove cercare l'uso di classi CSS.
  // Solo le classi rilevate in questi file verranno incluse nel bundle finale (tree shaking JIT).
  content: ["./*.html", "./js/**/*.js", "./data/**/*.json5", "./data/**/*.json"],

  // Registrazione di estensioni ufficiali Tailwind:
  plugins: [
    // 1. @tailwindcss/forms: applica stili di base (reset/normalizzazione) ottimizzati per form HTML
    require("@tailwindcss/forms"),
    // 2. @tailwindcss/container-queries: aggiunge utility per il responsive design basato sulle
    //    dimensioni del contenitore padre, anziché sulla viewport (es. @container, @md:...)
    require("@tailwindcss/container-queries")
  ]
}
