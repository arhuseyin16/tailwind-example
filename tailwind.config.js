/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}"
  ],
  theme: {
    fontSize: {
      '18': ['18px', 'normal'],
      '15': ['15px', 'normal'],
      '14': ['14px', 'normal'],
      '25': ['25px', 'normal'],
      '20-normal': ['20px', 'normal'],
      '20': ['20px', '1.5rem'],
      borderWidth: {
        '1': '1px'
      }
    },
    fontFamily: {
      'poppins': ['Poppins'],
    },
    borderRadius: {
      '5px': '5px',
      '20px': '20px'
    },
    screens: {
      'sm': '640px',
      // => @media (min-width: 640px) { ... }

      'md': '768px',
      // => @media (min-width: 768px) { ... }

      'lg': '1024px',
      // => @media (min-width: 1024px) { ... }

      'xl': '1280px',
      // => @media (min-width: 1280px) { ... }

      '2xl': '1536px',
      // => @media (min-width: 1536px) { ... }

      '3xl': '1900px',
      // => @media (min-width: 1536px) { ... }
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
        'prussian-blue': '#003249'
      },
      gap: {
        '30': '1.875rem',
      },
      padding: {
        '30px': '30px',
      },
      margin: {
        '25px': '25px',
        '88px': '88px',
      },
      boxShadow: {
        'silver-halice-lg': '0 0 14px 0 rgba(173, 173, 173, 0.2);'
      },
      lineHeight: {
        '47px': '2.9655 ',
      }
    },
  },
  plugins: [],
}
