/** @type {import('tailwindcss').Config} */

const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      colors: {
        "snes-black": "var(--snes-black)",
        "snes-light-gray": "var(--snes-light-gray)",
        "snes-dark-gray": "var(--snes-dark-gray)",
        "snes-purple": "var(--snes-purple)",
        "snes-light-purple": "var(--snes-light-purple)",
      },
      fontFamily: {
        sans: ["AsapVariable", ...defaultTheme.fontFamily.sans],
      },
    },
  },
  plugins: [require("@tailwindcss/typography")],
};
