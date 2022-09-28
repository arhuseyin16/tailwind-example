/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}"
  ],
  theme: {
    fontSize: {
      sidebarLabel: ['18px', 'normal'],
      sidebarTitle: ['15px', 'normal'],
      borderWidth: {
        '1': '1px'
      }
    },
    fontFamily: {
      'poppins': ['Poppins'],
    },
    extend: {
      colors: {
        'sapphire': '#2d64a0',
        'silver': '#bfbfbf',
        'cultured-earl': '#f5f5f5'
      }
    },
  },
  plugins: [],
}
