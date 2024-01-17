/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        lightGray: "#F8F9FA",
        mainBlue: "#072AC8",
        brightYellow: "#FDD85D",
        reallyGray: "#595F65"
      },
      fontFamily: {
        grotesk: ["Space Grotesk", "sans-serif"],
        montserrat: ["Montserrat", "sans-serif"],
      },
    },
  },
  plugins: [],
};
