/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  mode: 'jit',
  theme: {
    extend: {
      colors: {
        purpleSnapp: {
          300: '#ff00A6',
          400: '#fff5fc'
        },
        keyframes: {
          drop: {
            '0%': { transform: 'translateY(-500px)' },
            '100%': {transform: 'translateY(500px)'},
          },
        },
        animation: {
          drop: 'drop 2ms ease-in',
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