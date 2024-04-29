/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: { 
      colors: {
        "primary": "#D3D6E1",
        "secondary": "#8642AF",
        "secondary-alt": "#1d4ed8",
        "dark-primary": "#17171A",
        "dark-primary-alt": "#303036",
        "dark-secondary": "#111112",
        "dark-secondary-alt": "#1A1A1D",
        "dark": "#16151D",
        "dark-transparent": "#00000080"
      }
    },
  },
  plugins: [],
}