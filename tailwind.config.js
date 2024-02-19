/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        main: "#1F002B",
        secondary: "#36173D",
        step: "#E4229C",
        hover: "#E4229B",
        check: "#6D4376",
      },
      fontFamily: {
        cursive: "Niconne",
        bold: "NunitoBold",
        semibold: "NunitoSemiBold",
        regular: "NunitoRegular",
      },
    },
  },
  plugins: [],
};
