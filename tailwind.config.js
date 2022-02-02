module.exports = {
  purge: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        primary: "#191A19",
        secondary: "#FF5DA2",
      },
      fontFamily: {
        body: ["Spartan", "sans-serif"],
      },
      fontSize: {
        "10xl": "10rem",
      },
    },
  },
  variants: {
    extend: {
      ringWidth: ["hover"],
    },
  },
  plugins: [],
};
