/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        montserrat: ["Montserrat", "sans-serif"],
      },
      colors: {
        mainBg: "#DEDEDE",
        mainColor: "#1F2128",
        secondaryColor: "#BDBDBD",
        lightBlue: "#2469F640",
        websiteColor: "#FFCE22",
        checkboxBg: "#2469F6",
        secondaryCheckboxBg: "#5087F8",
        hoveredBtn: "#FFD84D",
        hoverCheckbox: "#E3E3E3",
      },
    },
  },
  plugins: [],
};
