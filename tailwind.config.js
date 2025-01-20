/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        darkBg: "#2C2F38",
        darkCard: "#3A3f4B",
        accent: "#FF5470",
        textLight: "#EAEAEA",
      },
    },
  },
  plugins: [],
};
