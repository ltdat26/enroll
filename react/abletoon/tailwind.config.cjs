/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        montserrat: ['Montserrat', 'sans-serif']
      },
      height: {
        '256': '64rem',
        '384': '96rem'
      },
      screens: {
        'md-max': { 'max': '767px' }
      },
    },
  },
  plugins: [],
}
