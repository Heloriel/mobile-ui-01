/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.tsx"],
  theme: {
    fontFamily: {
      "poppins": ["Poppins", "sans-serif"],
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
