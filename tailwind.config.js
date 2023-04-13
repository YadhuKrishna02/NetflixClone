/** @type {import('tailwindcss').Config} */
module.exports = {
  purge: {
    content: ["./src/**/*.{html,js,jsx,ts,tsx}"],
    safelist: [],
  },
  theme: {
    extend: {},
  },
  plugins: [require('tailwind-scrollbar-hide')],
}
