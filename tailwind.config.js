/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}",
    "./node_modules/tw-elements/dist/js/**/*.js"
  ],
  theme: {
    extend: {
      colors:{
        'primary': {
          DEFAULT: '#FAFF00',
          50: '#FBFFE7',
          100: '#F3FFC1',
          200: '#EBFF86',
          300: '#E8FF41',
          400: '#EDFF0D',
          500: '#FAFF00',
          600: '#D1C300',
          700: '#A68E02',
          800: '#896E0A',
          900: '#745A0F',
          950: '#443104'
        },
        'secondary': {
          DEFAULT: '#B12016',
          50: '#FEF3F2',
          100: '#FFE3E1',
          200: '#FFCCC9',
          300: '#FEA9A3',
          400: '#FC766D',
          500: '#F44B3F',
          600: '#E12D21',
          700: '#B12016',
          800: '#9D2017',
          900: '#82211A',
          950: '#470C08'
        }
      },
      animation:{
        'gradient-x': 'gradient-x 3.5s ease infinite',
        'gradient-y': 'gradient-y 3.5s ease infinite',
        'gradient-xy': 'gradient-xy 3.5s ease infinite'
      },
      'keyframes': {
        'gradient-y': {
          '0%, 100%': {
            'background-size':'400% 400%',
            'background-position': 'center top'
          },
          '50%': {
            'background-size':'200% 200%',
            'background-position': 'center center'
          }
        },
        'gradient-x': {
          '0%, 100%': {
            'background-size':'200% 200%',
            'background-position': 'left center'
          },
          '50%': {
            'background-size':'200% 200%',
            'background-position': 'right center'
          }
        },
        'gradient-xy': {
          '0%, 100%': {
            'background-size':'400% 400%',
            'background-position': 'left center'
          },
          '50%': {
            'background-size':'200% 200%',
            'background-position': 'right center'
          }
        }
      }
    },
  },
  darkMode: "class",
  plugins: []
}
