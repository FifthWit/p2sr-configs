/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: { 
      colors: {
        "primary": "#F2F2E6",
        "secondary": "#A6B3B7",
        "dark-primary": "#8B4DE7",
        "dark-secondary": "#315070",
        "dark": "#16151D",
      }
    },
  },
  plugins: [],
}