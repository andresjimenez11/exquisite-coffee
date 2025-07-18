/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx}"
  ],
  theme: {
    extend: {
      colors:{
        'primary': '#FFBD00',
        'primary-light': '#ecc453',
        'primary-dark': '#b88d14',
        'secondary': '#5b3a29',
        'secondary-light': '#6c4b3a',
        'secondary-dark': '#453025',
        'tertiary': '#ff0000',
        'tertiary-light': '#ec5353',
        'tertiary-dark': '#b81414',
        'back': '#e3e4e5',
        'back-dark': '#b4b6b9',
        'back-light': '#f6f6f6'

      }
    },
  },
  plugins: [],
}

