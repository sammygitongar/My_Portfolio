/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        bodyFont: ["Poppins", "sans-serif"],
        titleFont: ["Montserrat", "sans-serif"],
      },
      screens: {
        xs: "320px",
        sm: "375px",
        sml: "500px",
        md: "667px",
        mdl: "768px",
        lg: "960px",
        lgl: "1024px",
        xl: "1280px",
      },
      colors: {
        bodyColor2: "#0B1120",
        lightText2: "#c4cfde",
        boxBg2: "linear-gradient(145deg, #1e2024, #23272b)",
        designColor2: "#ff014f",

        bodyColor: "#e7edee",
        boxBg: "linear-gradient(120deg,#b9b9b98f, #feffffa4)",
        designColor: "#8401ff",
        lightText: "rgb(6, 14, 87)",

        cardBg: "linear-gradient(120deg,#b9b9b98f, #feffffa4)",
      },
      boxShadow: {
        shadowOne2: "10px 10px 19px #030712, -10px -10px 19px #0f172a",
        shadowOne: "2px 2px 20px #607070",
      },



    },
  },
  plugins: [],
};
