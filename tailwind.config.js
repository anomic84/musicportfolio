/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'climate': 'Climate Crisis, cursive',
        'manrope': 'Manrope, sans-serif'

      },
      colors: {
        primary: '#2d64b5',
        navbg: '#815973',
        navtext: '#e9fcfd',
        navnametext: '#b7e8ee'
      },
    },
  },
  plugins: [],
}
