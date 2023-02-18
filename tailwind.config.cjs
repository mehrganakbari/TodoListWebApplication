/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["*.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    colors: {
      'lite-100': '#eceff6',
      'lite': '#eeeeee',
      'white': '#ffffff',
      'dark': '#131023',
      'gray': '#9fa9b3',
      'blue': '#86b9f4',
      'pink': '#f79dc4',
      'purple': '#c4adf4',
      'orange': '#f1ad87',
      'green': '#abd3bc',
    },
    extend: {
      screens: {
        'xs': '400px',
        'xs2': '515px',
        'sm': '568px',
        'md': '640px',
        'lg': '768px',
        'lg2': '920px',
        'xl': '1024px',
        '2xl': '1280px',
        '3xl': '1536px',
      },
    },
  },
  plugins: [
    require('tailwind-scrollbar'),
  ],
};