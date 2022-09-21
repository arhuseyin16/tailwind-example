/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}"
  ],
  theme: {
    fontSize: {
      sidebarLabel: ['18px', 'normal'],
      sidebarTitle: ['15px', 'normal']
    },
    fontFamily: {
      'poppins': ['Poppins'],
    },
    extend: {},
  },
  plugins: [],
}
