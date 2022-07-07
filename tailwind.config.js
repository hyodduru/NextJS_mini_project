module.exports = {
  future: {
    removeDeprecatedGapUtilities: true,
  },
  purge: ["./components/**/*.{js,ts,jsx,tsx}", "./pages/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        Arima: ["Arima"],
        Nanum: ["Nanum Myeongjo", "serif"],
      },
    },
  },
  variants: {},
  plugins: [],
};
