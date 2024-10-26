/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      backgroundColor: {
        'bg-whitePersonalized': "#f5f5f5",
      }
    },
  },
  plugins: [],
}

