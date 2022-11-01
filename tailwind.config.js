/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        watanasa: {
          /// Shades
          primary: "#DD5353",
          "shade-2": "#BB343A",
          "shade-3": "#9A0D22"  ,
          "shade-4": "#7A000C",
          "shade-5": "#5B0000",

          /// Spot Pallete
          "spot-1": "#EDA49E",
          "spot-2": "#FFE4DF",
          "spot-3": "#71B2DF",

          /// Matching Gradient
          accent: "#D54B7D",
          
          /// Discreet Palette
          scaffold: "#FFF4F1",
        },
      },
      fontFamily: {
        "josefin-sans": ["Josefin Sans", "sans-serif"],
        poppins: ["Poppins", "sans-serif"],
      },
    },
  },
  plugins: [
    require('@tailwindcss/line-clamp'),
  ],
};
