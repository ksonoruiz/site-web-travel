/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      backgroundColor: theme => ({
        ...theme('colors'),
        'primary' : '#CC2D4A',
        'secondary' : '#8fa206',
        'terceary' : '#61aec9'
      }),
      textColor: {
        'primary' : '#CC2D4A',
        'secondary' : '#8fa206',
        'terceary' : '#61aec9'
      },
      fontFamily: {
        Montserrat : ['Montserrat', 'sans-serif']
      },
      backgroundImage: {
        'chicago'    : "url('./images/otra_1.jpg')",
        'new_york'   : "url('./images/otra_2.jpg')",
        'banner'     : "url('./images/banner.png')"
      }
    },
  },
  plugins: [],
}

