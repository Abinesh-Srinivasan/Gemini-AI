/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      screens: {
        "4k":"3840px",
      }
    },
    colors: {
      white: "#ffffff",
      plusbg: "#282a2c",
      pluscolor: "#e3e3e4",
      copyrightblue: "#a3c1f2",
      mainpagebg: "#131314",
      sidebarbg: "#1e1f20",
      defaultcolor: "#e9ebed",
      dimcolor: "#444746",
      hellocolor1: "#667ee4",
      hellocolor2: "#d66675",
      promptbg: "#282a2c",
      promptText: "#bdc1c6",
      suggestionBg: "#1e1f20",
      suggestionhover: "#3b4456",
    },
    fontFamily: {
      opensans: ["Open Sans", "sans-serif"],
    },
  },
  plugins: [
    function ({ addUtilities }) {
      addUtilities({
        ".no-scrollbar": {
          "scrollbar-width": "none" /* Firefox */,
          "-ms-overflow-style": "none" /* Internet Explorer 10+ */,
        },
        ".no-scrollbar::-webkit-scrollbar": {
          display: "none" /* WebKit browsers */,
        },
      });
    },
  ],
};
