module.exports = {
  content: ["./*.html", "./js/**/*.js", "./data/**/*.json5", "./data/**/*.json"],
  plugins: [
    require("@tailwindcss/forms"),
    require("@tailwindcss/container-queries")
  ]
}
