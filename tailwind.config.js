/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [],
  theme: {
    extend: {
     
    },
  },
  plugins: [],
}

/** @type {import('tailwindcss').Config} */
const plugin = require('tailwindcss/plugin')
module.exports = {
  content: [
    './**/*.{html,js}',
    './css/**/*.css',
    './js/**/*.js',
  
  ],
  darkMode: 'class',

  theme: {
    screens: {
      sm: '480px',
      md: '768px',
      lg: '976px',
      xl: '1440px',
    },
    colors: {
      'White':'#fff',
      'black':'#000000',
      'White1':'#F8F8F8',
      'gray':'#6E6E6E',
      'darkov':'#0E0E0ED9',
       'darkgray' :'#252525',
       'dark1':'#0E0E0E',
       'black1':'#131313',

       'nblack':'#0E0E0E',
       'txtblack':'#131313',
       'nWhite':'#F8F8F8',
 
       'darkGray':'#252525',
       'Gray':'#6E6E6E',
       'transparent':'#25252500',
    },

    fontFamily: {
      'IRANSansWeb300': ['IRANSansWeb300', 'IRANSansWeb300'],
      'IRANSansWeb400': ['IRANSansWeb400', 'IRANSansWeb400'],
      'IRANSansWeb500': ['IRANSansWeb500', 'IRANSansWeb500'],
      'IRANSansWeb700': ['IRANSansWeb700', 'IRANSansWeb700'],
    

    },
    extend: {
      
      content:{
  'content1':' '
      },
      lineHeight: {
        '18.78': '18.78px',
        '64': '64px',
        '23':'23px',
        '25.4':'25.04px',
        '57.97':'57.97px',
        '17.96': '17.96px',
        '21.91': '21.91px',
        '32.03':'32.03px',
        '56.35':'56.35px',
        '25.04':'25.04px',
        '37.97':'37.97px',
        '37.57':'37.57px',
        '31.03':'31.03px',
        '28.17':'28.17px',
        '18.78':'18.78px',
         '20.25':'20.25px',
         '24':'24px',
         '46.96':'46.96px',
         '16.41':'16.41px',
         '14.06':'14.06px',
         '18.75':'18.75px',
         '31':'31px',
         '43.4':'43.4px',
         '17.05':'17.05px',
         '21':'21px',
         '24.18':'24.18px',
         '27.09':'27.09px',
         '20.15':'20.15px',
         '35':'35px',
         '28':'28px',
         '41':'41px',
         '55':'55px',
         '48':'48px',
         '32':'32px',
         '40.96':'40.96px',
         '34.43':'34.43px',
       

      },

      width:{
        '85p':'85%',
        '90p':'90%',
        '80p':'80%',
        '95p':'95%',

      },
      maxWidth: {
        'x100': '100%',
      },
      zIndex: {
        '1': '1',
        '2': '2',
        '3': '3',

      }
    },
    translate: {
      '100': '-100%',
    }
  },
  
  
}