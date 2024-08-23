/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      brightness:{
        25:'.25',
      },
      backgroundImage:{
        'backgroud-main-section': "url(../imagem/Material/technology-791029_1920.webp)",
      },
    },
  },
  plugins: [],
}

