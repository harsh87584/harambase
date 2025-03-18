/** @type {import('tailwindcss').Config} */
import defaultTheme from "tailwindcss/defaultTheme";
const colors = require("tailwindcss/colors");
const {
  default: flattenColorPalette,
} = require("tailwindcss/lib/util/flattenColorPalette");
module.exports = {
  content: ["./src/**/*.{html,js,jsx}"],
  darkMode: "class",
  theme: {
    screens: {
      ...defaultTheme.screens,
      xxxl: { max: "1900px" },
      xxl: { max: "1500px" },
      xl: { max: "1300px" },
      lg: { max: "1024px" },
      md: { max: "768px" },
      sm: { max: "640px" },
      xs: { max: "500px" },
      xxs: { max: "400px" },
      xxxs: { max: "376px" },
    },
    extend: {
      fontFamily: {
        Cutiemollydemo: ["Cutiemollydemo"],
        VolkswagenSerialRegular: ["VolkswagenSerialRegular"],
        VolkswagenSerialBold: ["VolkswagenSerialBold"],
        VolkswagenSerialMediumRegular: ["VolkswagenSerialMediumRegular"],
      },
      colors: {
        primary: "#2156F6",
        secondary: "#848484",
      },
      screens: {
        xxxs: { max: "376px" },
        max_xxs: { min: "377px", max: "400px" },
        max_xs: { min: "401px", max: "449px" },
        max_sm: { min: "450px", max: "499px" },
        max_md: { min: "500px", max: "768px" },
        max_lg: { min: "769px", max: "1024px" },
        max_xl: { min: "1025px", max: "1300px" },
        max_xxl: { min: "1301px" },
        min_xxxl: { min: "1900px" },
      },
      animation: {
        scroll:
          "scroll 18s var(--animation-direction, forwards) linear infinite",
      },
      keyframes: {
        scroll: {
          to: {
            transform: "translate(calc(-50% - 0.5rem))",
          },
        },
      },
    },
  },
  plugins: [addVariablesForColors],
};
function addVariablesForColors({ addBase, theme }) {
  let allColors = flattenColorPalette(theme("colors"));
  let newVars = Object.fromEntries(
    Object.entries(allColors).map(([key, val]) => [`--${key}`, val])
  );

  addBase({
    ":root": newVars,
  });
}
