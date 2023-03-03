/* eslint-disable global-require */
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        roboto: ["Roboto", "sans-serif"],
        lato: ["Lato", "sans-serif"],
      },
      colors: {
        green: "#538887",
        darkgreen: "#2e483e",
        white: "#fff",
        mediumgray: "#9b9b9b",
        darkgray: "#424242",
        // bqdarkgreen: "#2e483e",
        bqorange: "#e0b658",
        bqpalegray: "#afafaf",
        bqdarkorange: "#a6612d",
        bqcyan: "#7bb5b1",
        bqlightgray: "#afafaf",
        bqlightbeige: "#f1dca9",
        bqturquoise: "#7bb58e",
        bqcream: "#f1dca9",
        bqtopaz: "#3e8986",
        bqlightorange: "#efb850",
        bqlightblue: "#81c8c5",

        darkv1: "#353535",
        darkv2: "#3A3A3A",

        bqmediumgreen: "#24463b",
        bqlightgreen: "#58776e",
      },
    },
  },
  plugins: [require("@tailwindcss/container-queries")],
};
