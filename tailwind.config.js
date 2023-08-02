/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./dist/**/*.{html,js}"],
  theme: {
    extend: {
      colors:{
        'light-dark':'#2c2c32',
        'dark':'#25252B',
        'blue':'#0066B8',
        'white': '#ffffff',
        'fwhite': '#F5F5F5',
      },
    },
  },
  plugins: [],
}

