const defaultTheme = require("tailwindcss/defaultTheme")

module.exports = {
  mode: "jit",
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
     fontFamily: {
      lexend: ['Lexend, sans-serif'],
      sans: ['Inter', ...defaultTheme.fontFamily.sans]
     },
     colors: {
       primary: "#242323",
       accent: "#DADAD2",
       secondary: "#6E7480",
       "secondary-2": "#535C36",
       "secondary-3": "#766A74",
       "secondary-4": "#C59D7A",
       highlight: "#C47975",
     }
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
}