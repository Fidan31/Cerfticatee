/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
    "./node_modules/flowbite/**/*.js"
  ],
  theme: {
    extend: {},
    fontFamily: {
      'imperial': ['Imperial Script', 'sans-serif'],
      'tinos':['Tinos','sans-serif'],
      'aliyana':['Aliyana','cursive']
    },
  },
  plugins: [
    require('flowbite/plugin')
  ],
}

