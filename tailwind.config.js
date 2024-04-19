/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  
  theme: {
    extend: {
      screens: {
        'xs': '320px',
        'sm': '481px',
        'md': '769px',
        'lg': '1025px',
        'xl': '1201px',
      },
    },
  },
  plugins: [],
}
