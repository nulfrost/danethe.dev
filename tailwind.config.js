module.exports = {
  purge: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  mode: "jit",
  darkMode: false, // or 'media' or 'class'
  theme: {
    fontFamily: {
      sans: ["Inter", "sans-serif"],
    },
    extend: {
      textColor: {
        skin: {
          base: "var(--color-text-base)",
          secondary: "var(--color-text-secondary)",
        },
      },
      typography: {
        DEFAULT: {
          css: {
            h2: {
              color: "#FDFFFC",
            },
            h3: {
              color: "#FDFFFC",
            },
            code: {
              color: "#FDFFFC",
            },
            a: {
              color: "#FDFFFC",
            },
          },
        },
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [require("@tailwindcss/typography")],
};
