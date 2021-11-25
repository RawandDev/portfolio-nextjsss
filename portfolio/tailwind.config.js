module.exports = {
  purge: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        primary: "#27187E",
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
    extend: {},
  },
  plugins: [],
};
