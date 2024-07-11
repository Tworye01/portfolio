/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/**/*.{js,ts,jsx,tsx,mdx}"
  ],
  theme: {
    extend: {
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
      cream : {
        100: `#f7f6da`
      },
    },
  },
  plugins: [],
}

