/** @type {import('tailwindcss').Config} */

module.exports = {
  mode: "jit",
  darkMode: "class",
  content: ["./app/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        smoky: "hsl(var(--smoky))",
        almond: "hsl(var(--almond))",
      },
    },
  },
  plugins: [require("@tailwindcss/typography")],
};
