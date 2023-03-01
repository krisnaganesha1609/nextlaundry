/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        purple: "rgba(153, 0, 240, 1)",
        magenta: "#F900BF",
        pink: "#FF85B3",
        blue: "#4700D8",
        white: "#FFFFFF",
        whiteGrey: "#9E9E9E",
      },
      fontFamily: {
        righteous: ["Righteous", "cursive"],
      },
      screens: {
        max_sm: { max: "768px" },
      },
    },
    screens: {
      xs: "480px",
      ss: "620px",
      sm: "768px",
      md: "1060px",
      lg: "1200px",
      xl: "1700px",
    },
  },
  plugins: [],
};