/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class', // <--- Critical for Light/Dark mode requirement
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'sans-serif'], // <--- Matches Screenshot #6
      },
      colors: {
        base: {
          blue: '#0052FF',  // <--- Official Base Brand Color
          black: '#000000',
          white: '#FFFFFF',
          gray: '#F2F3F5',
        }
      }
    },
  },
  plugins: [],
}