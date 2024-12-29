/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,ts}"],
  theme: {
    colors: {
      "purple-100": "hsl(254, 88%, 90%)",
      "purple-500": "hsl(256, 67%, 59%)",
      "yellow-100": "hsl(31, 66%, 93%)",
      "yellow-500": "hsl(39, 100%, 71%)",
      "white": "#ffffff",
      "black": "#000000",
    },
    fontFamily: {
      dmSans: ["DM Sans", "sans-serif"],
      dmSansMedium: ["DM Sans Medium", "sans-serif"],
      dmSansMediumItalic: ["DM Sans Medium Italic", "sans-serif"],
    },
  },
  plugins: [],
};
