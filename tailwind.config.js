/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      textShadow: {
        "2xl" : "2px 2px 2px black"
      }
    },
  },
  plugins: [
    require('tailwindcss-textshadow')
  ],
}
