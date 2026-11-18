/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./*.html",
    "./**/*.html",
    "./src/**/*.{html,js}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Cairo', 'sans-serif'],
      },
      colors: {
        primary: {
          DEFAULT: '#1e3a8a',
          hover: '#172554',
        },
        accent: '#ba1c1c',
        gold: '#fabd23',
      }
    },
  },
  plugins: [],
}
