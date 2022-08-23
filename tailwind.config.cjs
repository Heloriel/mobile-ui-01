/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.tsx"],
  theme: {
    fontFamily: {
      "poppins": ["Poppins", "sans-serif"],
    },
    extend: {
      colors: {
        "project-primary": "#1d2757",
        "project-secondary": "#35489f",
      }
    },
  },
  plugins: [],
}
