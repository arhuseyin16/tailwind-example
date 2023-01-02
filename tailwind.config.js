/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}"
  ],
  theme: {
    fontSize: {
      '9': ['9px', 'normal'],
      '14': ['clamp(0.688rem, 0.729vw, 0.875rem)', 'normal'],
      '15': ['0.938rem', 'normal'],
      '16': ['clamp(0.688rem, 0.833vw, 1rem)', 'normal'],
      '18': ['clamp(0.75rem, 0.938vw, 1.125rem)', 'normal'],
      '20': ['clamp(0.75rem, 1.042vw, 1.25rem)', '1.5rem'],
      '20-normal': ['clamp(0.75rem, 1.042vw, 1.25rem)', 'normal'],
      '22': ['clamp(0.75rem, 1.146vw, 1.25rem)', '1.5rem'],
      '25': ['clamp(0.75rem, 1.302vw, 1.563rem)', 'normal'],
      '30': ['clamp(0.938rem,1.563vw, 1.875rem)', 'normal'],
    },
    borderWidth: {
      '1': '1px',
      '0.5': '0.5px',
      '0': '0',
      '2': '2px'
    },
    fontFamily: {
      'poppins': ['Poppins', 'sans-serif'],
    },
    borderRadius: {
      '5px': '5px',
      '20px': '20px',
      '10px': '10px',
      '13px': '13px',
      '15px': '10px',
      "50%": '50%',
       "0": "0"
    },
    screens: {
      'sm': '640px',
      // => @media (min-width: 640px) { ... }

      'md': '768px',
      // => @media (min-width: 768px) { ... }

      'min-lg': '1023px',
      // => @media (min-width: 1023px) { ... }

      'lg': '1024px',
      // => @media (min-width: 1024px) { ... }

      'max-lg': '1025px',
      // => @media (min-width: 1025px) { ... }

      'xl': '1280px',
      // => @media (min-width: 1280px) { ... }

      'maxXl': '1281px',
      // => @media (min-width: 1281px) { ... }

      '2xl': '1440px',
      // => @media (min-width: 1280px) { ... }

      '3xl': '1536px',
      // => @media (min-width: 1536px) { ... }

      '4xl': '1900px',
      // => @media (min-width: 1536px) { ... }
    },
    minWidth: {
      '98%': '98%',
      '99%': '99%',
      '97%': '97%',
      'auto': 'auto'
    },
    maxWidth: {
      '14%': '14%',
      '15%': '15%',
      '25%': '25%',
      '49%': '49%',
      '75%': '75%',
      '98%': '98%',
      '99%': '99%',
      '97%': '97%',
      'full': '100%',
      'auto': 'auto'
    },
    maxHeight: {
      '98%': '98%',
      '99%': '99%',
      '97%': '97%',
      'auto': 'auto'
    },
    minHeight: {
      '98%': '98%',
      '99%': '99%',
      '97%': '97%',
      'auto': 'auto'
    },
    extend: {
      colors: {
        'sapphire': '#2d64a0',
        'silver': '#bfbfbf',
        'cultured-earl': '#f5f5f5',
        'lapis-lazuli': '#2d639f',
        'ghost-white': '#f5f6fe',
        'eton-blue': '#87bfad',
        'new-car': '#2457c3',
        'prussian-blue': '#003249',
        'gray-x11': '#b9b9b9',
        'anti-flash-white': '#f2f2f2',
        'american-silver': '#d1d1d1',
        'dark-silver-conf': '#707070',
        'dark-charcoal': '#ABABAB',
        'boston-university-red': '#CE0000',
        'toupe-gray': '#898989',
        'sonic-silver': '#757373',
        'light-silver': '#d9d9d9',
        'azure': '#0079ff',
        'permanent-geranium-lake': '#e53030',
        'silver-foil': '#afafaf',
        'spanish-gray': '#959595',
        'light-gray': '#d3d3d3',
        'water': '#dbecff',
        'philippine-gray': '#8b8b8b',
        'queen-blue': '#356ba1'
      },
      gridTemplateRows: {
        '10': 'repeat(10, minmax(0, 1fr))',
        '2-0.7fr': 'repeat(2, minmax(0, 0.7fr))'
      },
      gap: {
        '30': '1.875rem',
        '177': '11.0625rem'
      },
      padding: {
        '5px': '0.313rem',
        '15px': '0.938rem',
        '18px': '1.125rem',
        '25px': '1.563rem',
        '30px': '1.875rem',
        '35px': '2.188rem',
        '50%': '50%'
      },
      margin: {
        '14px': '0.875rem',
        '15px': '0.938rem',
        '23px': '1.438rem',
        '25px': '1.563rem',
        '27px': '1.688rem',
        '30px': '1.875rem',
        '88px': '5.5rem',
        '104': '415px'
      },
      boxShadow: {
        'silver-halice-lg': '0 0 14px 0 rgba(173, 173, 173, 0.2);'
      },
      lineHeight: {
        '47px': '2.9655',
        '25px': '1.5625'
      },
      width: {
        '31px': '1.938rem',
        '106px': '6.625rem',
        '150px': '9.375rem',
        '250px': '15.625rem',
        '560px': '35rem',
        '98%': '98%',
        '99%': '99%',
        '97%': '97%',
        '70%': '70%'
      },
      height: {
        '31px': '1.938rem',
        '50px': '3.125rem',
        '106px': '6.625rem',
        '850px': '53.125rem',
        '98%': '98%',
        '99%': '99%',
        '97%': '97%',
        '70%': '70%'
      },
      spacing: {
        '3px': '0.188rem',
        '30px': '1.875rem'
      }
    },
  },
  plugins: [],
}
