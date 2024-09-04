/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./public/**/*.{html,js,css}"],//this mean i can use in html and js files ** means in subfolders also
  theme: {
    extend: {
      screens:{
        'custom-hide':'1172px',
        'custm':'877px',

        'c3':'790px',
        'c4':'600px'
      }
    },
  },
  plugins: [],
}

