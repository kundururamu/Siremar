module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primaryColor: "#EE6C4D",
        backgroundLight: "#EEF0F2",
        backgroundDark: "#20252D",
        secondaryColor: "#4A4A4A",
        textColor: "#ffffff",
        statusYes: "#4DEE8D",
        statusNo: "#e63946",
      },
      fontFamily: {
        Montserrat: ["Montserrat"],
      },
    },
  },
  plugins: [],
};
