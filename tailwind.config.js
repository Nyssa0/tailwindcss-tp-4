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
        'raisin-black': '#292227',
        'onyx': '#3F3F45',
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
      keyframes: {
        wiggle: {
          '0%, 100%': { transform: 'rotate(-40deg)' },
          '50%': { transform: 'rotate(40deg)' },
        },
        arrow: {
          '0%, 100%': { transform: 'translateX(0px)' },
          '50%': { transform: 'translateX(10px)' },
        }
      },
      animation: {
        wiggle: 'wiggle 2s ease-in-out infinite',
        arrow: 'arrow 2s ease-in-out infinite',
      }
    },
  },
  plugins: [],
  darkMode: "class",
}