/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/**/*.{js,ts,jsx,tsx,mdx}"
  ],
  theme: {
    extend: {
      keyframes: {
        typingFirst: {
          "0%": {
            width: "0%",
            visibility: "hidden"
          },
          "100%": {
            width: "100%"
          }
        },
        typingSecond: {
          "0%": {
            width: "0%",
            visibility: "hidden"
          },
          "100%": {
            width: "100%"
          }
        },
        blink: {
          "50%": {
            borderColor: "transparent"
          },
          "100%": {
            borderColor: "currentColor"
          }
        },
        hideCursor: {
          "0%": {
            borderColor: "currentColor"
          },
          "100%": {
            borderColor: "transparent"
          }
        }
      },
      animation: {
        typingFirst: "typingFirst 2s steps(60) forwards, blink .7s infinite, hideCursor .1s forwards 2s",
        typingSecond: "typingSecond 3.5s steps(60)forwards, blink .7s infinite, hideCursor .1s forwards 3s",
      },
      fontFamily: {
        rubik: ['Rubik', 'sans-serif'],
      },
    },
    colors: {
      ...require("tailwindcss/colors"),
      limegreen: {
        600: `#B9FF66`,
      },
      darkgreen: {
        100: `#00674f`,
      },
      cream: {
        100: `#F7F6DA`,
        200: `#ded0c4`
      },
    },
  },
  plugins: [],

  
}


