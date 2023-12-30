/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
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