/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    container: {
      center: true,
      padding: "1.1rem",
    },
    extend: {
      colors: {
        primary: "#212127",
        secondary: "#6948FF"
      }
    },
  },
  plugins: [],
}