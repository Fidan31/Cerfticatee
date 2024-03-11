/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
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

