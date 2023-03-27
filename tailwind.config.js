/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        silver: "#717171",
        bgcolor: "#F5F5F5",
        navLinkDefault: "#1F1F1F",
        contactInfoSilver: "#C9C9C9",
        formInputDefault: "#8D8D8D",
        checkBoxDefault: "#E0E0E0",
        defaultIconsBg: "#1B1B1B",
        footerSubBox: "#131313",
        footerSubBoxInput: "#1E1E1E",
        footerSubBoxInputText: "#616161",
      },
    },
    variants: {
      fill: ["hover", "focus"],
    },
    fontFamily: {
      inter: ["Inter", "sans-serif"],
      poppins: ["Poppins", "sans-serif"],
      roboto: ["Roboto", "sans-serif"],
    },
  },
  plugins: [],
};
