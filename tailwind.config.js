module.exports = {
  purge: ["./components/**/*.js", "./pages/**/*.js"],
  theme: {
    extend: {},
  },
  variants: {
    borderWidth: ["responsive", "hover", "focus"],
  },
  plugins: [require("@tailwindcss/typography")],
};
