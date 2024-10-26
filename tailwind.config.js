/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      backgroundColor: {
        'bg-whitePersonalized': "#f5f5f5",
      },
      boxShadow: {
        'box-shadow-personalized': "inset 0px 0px 10px 0 rgb(0 0 0 /0.25)",
      },
      borderColor: {
        'border-rgba-black': "rgba(0, 0, 0, 0.2)",
      }
    },
  },
  plugins: [],
}

