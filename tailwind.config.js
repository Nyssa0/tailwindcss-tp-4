/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      fontSize: {
        'paragraph': '16px',
        'title1': '32px',
        'title2': '24px',
        'title3': '20px',
        'title4': '18px',
      },
      colors: {
        'black': '#000000',
        'white': '#FFFFFF',
        'red': '#FF0000',
        'green': '#00FF00',
        // 'eerie-black': '#1A1A1A',
        // 'thulian-pink': '#E771A4',
        // 'amaranth-purple': '#AA0E52',
        'raisin-black': '#292227',
        'onyx': '#3F3F45',
        // 'pale-purple': '#FCE7F2',
        // 'lavender': '#EAEAFA',
        'seasalt': '#F7F7F7',
      },
      borderRadius: {
        'sm': '8px',
        'md': '16px',
        'lg': '24px',
        'xl': '48px',
      },
      width: {
        'half': '50vw',
      },
    },
  },
  plugins: [],
  darkMode: "class",
}