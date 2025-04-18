const { color } = require("chart.js/helpers");

module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      animation: {
        "spin-slow": "spin 6s linear infinite",
        "spin-fast": "spin 4s linear infinite",
        "spin-reverse": "reverse-spin 10s linear infinite",
      },
      keyframes: {
        "reverse-spin": {
          "0%": { transform: "rotate(360deg)" },
          "100%": { transform: "rotate(0deg)" },
        },
      },
    },
  },
  plugins: [],
};
