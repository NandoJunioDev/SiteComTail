const plugin = require('tailwindcss/plugin')

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
      colors:{
            'blue-1':'#0339A6',
            'blue-2':'#1755A6',
            'blue-3':'#6A9AD9',
            'blue-4':'#91B7D9',
            'marfin':'#D9985F',
            'preto':'#212426',
            'cinza':'#D9D9D9',
            'verde':'#E2F266',
            'verde-2':'#9CA653',
            'amarelo':'#F2EA77',
      },
    
      fontFamily:{
        'Russo-One-Regular':['Russo-One'],
        'Raleway-Reular':['Raleway-Regular']
      },
      screens:{
        'celular':{'max': '420px'}

      },
      gridTemplateRows:{
        'row-3-fit':'repeat(auto-fill, minmax(100px,1fr))'
      },
      textShadow: {
        sm: '0 1px 2px var(--tw-shadow-color)',
        DEFAULT: '0 2px 4px var(--tw-shadow-color)',
        lg: '0 8px 16px var(--tw-shadow-color)',
      },
  },
   plugins: [
    plugin(function ({ matchUtilities, theme }) {
      matchUtilities(
        {
          'text-shadow': (value) => ({
            textShadow: value,
          }),
        },
        { values: theme('textShadow') }
      )
    }),
  ],

}
}
