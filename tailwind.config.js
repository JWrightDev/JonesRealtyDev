/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}",
    "./node_modules/tw-elements/dist/js/**/*.js"
  ],
  theme: {
    extend: {
      colors:{
        'primary': '#FAFF00',
        'secondary': '#B12016'
      }
    },
  },
  darkMode: "class",
  plugins: []
}
