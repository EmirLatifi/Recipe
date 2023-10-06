/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        marck: ["Marck Script", "cursive"],
        crimson: ["Crimson Text", "serif"],
        courgette: ["Courgette", "cursive"]
      }
    },
  },
  plugins: [],
}

