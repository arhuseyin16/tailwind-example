/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}"
  ],
  theme: {
    fontSize: {
      '18': ['18px', 'normal'],
      '15': ['15px', 'normal'],
      '25': ['25px', 'normal'],
      borderWidth: {
        '1': '1px'
      }
    },
    fontFamily: {
      'poppins': ['Poppins'],
    },
    borderRadius: {
      '5px': '5px'
    },
    extend: {
      colors: {
        'sapphire': '#2d64a0',
        'silver': '#bfbfbf',
        'cultured-earl': '#f5f5f5',
        'lapis-lazuli': '#2d639f'
      }
    },
  },
  plugins: [],
}
