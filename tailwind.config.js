/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      spacing: {
        '1140': '1140px',
      },
      fontFamily: {
        'Oswald': 'Oswald'
      },
      screens:{
        'smartphone': '400px'
      }
    },
  },
  plugins: [],
}

