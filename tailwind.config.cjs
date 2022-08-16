/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.tsx"],
  theme: {
    fontFamily: {
      "lato": ["Lato", "sans-serif"],
    },
    extend: {
      colors: {
        "project-primary": "#191C3F",
        "project-secondary": "#30315D",
      }
    },
  },
  plugins: [],
}
