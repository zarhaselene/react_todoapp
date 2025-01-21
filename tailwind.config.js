/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        "bg-color": "#292635",
        "card-bg": "#2F3240",
        "text-color": "#F8F8F2",
        "muted-text": "#939393",
        "input-bg": "#353847",
        "primary-accent": "#F377A7",
        "hover-color": "#1a1a1a",
        "error-color": "#FF5555",
      },
    },
  },
  plugins: [],
};
