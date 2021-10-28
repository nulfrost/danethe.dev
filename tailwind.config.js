module.exports = {
  mode: "jit",
  purge: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  darkMode: "class", // or 'media' or 'class'
  theme: {
    extend: {
      textColor: {
        offwhite: "var(--color-offwhite)",
        "kinda-black": "var(--color-kinda-black)",
        grayish: "var(--color-grayish)",
      },
      backgroundColor: {
        offwhite: "var(--color-offwhite)",
        "kinda-black": "var(--color-kinda-black)",
        grayish: "var(--color-grayish)",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
