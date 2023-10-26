/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'climate': 'Climate Crisis, cursive',
        'manrope': 'Manrope, sans-serif',
        'euph': 'Euphoria Script, cursive',
        'ubuntu': 'Ubuntu, sans-serif',
        'bungee': 'Bungee Shade, cursive',
        'titan': 'Titan One, cursive'
      },
      colors: {
        primary: '#2d64b5',
        navbg: '#815973',
        navtext: '#e9fcfd',
        navnametext: '#b7e8ee',
        navnametexthover: '#b4dade',
        mediabg: '#FFb3b3',
        aboutbg: '#0f172a',
        busride: '#c85191',
        syzygy: '#240519'
      },
    },
  },
  plugins: [],
}
