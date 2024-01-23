/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  mode: 'jit',
  theme: {
    extend: {
      keyframes: {
        drop: {
          '0%': {transform: 'translateY(-400px)'},
          '100%': {transform: 'translateY(0)'},
        },
      },
      animation : {
        'drop-slow': 'drop .8s ease-in',
      },
      colors: {
        purpleSnapp: {
          300: '#ff00A6',
          400: '#fff5fc'
        },
        },
        screens: {
          '3xl': '1650px',
        margin: {
          '400px': '400px',
        }
    },
  },
  plugins: [],
  }
}