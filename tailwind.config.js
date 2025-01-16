/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#DD1B1B',
        secondary: '#1A1D2C',
        accent: '#F85E00',
      }
    },
  },
  plugins: [],
}