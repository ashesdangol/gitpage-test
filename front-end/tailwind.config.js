/** @type {import('tailwindcss').Config} */

module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}","./node_modules/flowbite-react/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        moonBold: ["moon-bold"],
        moonRegular: ["moon-regular"],
        arvo: ['Arvo', "serif"],
        lato: ['Lato', 'sans-serif'],
      }
    },
  },
  plugins: [require('flowbite/plugin')
  ],
}
