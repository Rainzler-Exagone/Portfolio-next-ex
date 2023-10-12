/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode:'class',
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
       'roboto':['Roboto'],
       'borel': ['Borel', 'cursive'],
        'handjet': ['Handjet', 'cursive'],
        'burtons': ["burtons"],
        'lugarsimo': ['Lugrasimo','cursive'],
        'poppins': ["Poppins", "sans-serif"],
      },
      screens: {
        'lg': '992px',
        // => @media (min-width: 992px) { ... }
      },
    },
  },
  plugins: [
    require('tailwind-scrollbar-hide')
  ],
}
