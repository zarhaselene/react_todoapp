/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        darkBg: "#2C2F38",
        darkCard: "#343A40",
        accent: "#FF5470",
        border: "#2E3238",
      },
    },
  },
  plugins: [],
};
