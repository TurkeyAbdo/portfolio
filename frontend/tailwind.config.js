/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        primary: "#18191C",
        secondary: "#23242A",
        accent: "#3B82F6"
      }
    },
  },
  plugins: [],
}; 