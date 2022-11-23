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
          "primary-100": "#e6f7ff",
          "primary-200": "#bae7ff",
          "primary-300": "#91d5ff",
          "primary-400": "#69c0ff",
          "primary-500": "#40a9ff",
          "primary-600": "#1890ff",
          "primary-700": "#096dd9",
          "primary-800": "#073A93",
          "primary-900": "#0050b3",
          "primary-1000": "#003a8c",
          "success-100": "#F5FCCB",
          "success-200": "#E9FA98",
          "success-300": "#D3F062",
          "success-400": "#BCE13B",
          "success-500": "#9BCE04",
          "success-600": "#80B102",
          "success-700": "#679402",
          "success-800": "#507701",
          "success-900": "#3F6200",
          "info-100": "#D8FDF4",
          "info-200": "#B2FCEF",
          "info-300": "#8BF8ED",
          "info-400": "#6CF1EF",
          "info-500": "#3EDCE8",
          "info-600": "#2DAFC7",
          "info-700": "#1F87A7",
          "info-800": "#136186",
          "info-900": "#0B476F",
          "warning-100": "#FFF5D7",
          "warning-200": "#FFE7AF",
          "warning-300": "#FFD787",
          "warning-400": "#FFC769",
          "warning-500": "#FFAC38",
          "warning-600": "#DB8928",
          "warning-700": "#B7691C",
          "warning-800": "#934D11",
          "warning-900": "#7A380A",
          "danger-100": "#FFE5D7",
          "danger-200": "#FFC6AF",
          "danger-300": "#FF9F87",
          "danger-400": "#FF7A69",
          "danger-500": "#FF3E38",
          "danger-600": "#DB2832",
          "danger-700": "#B71C31",
          "danger-800": "#93112F",
          "danger-900": "#7A0A2D",
          "gray-1": "#333333",
          "gray-2": "#4F4F4F",
          "gray-3": "#828282",
          "gray-4": "#BDBDBD",
        },
        naraai: {
          "primary-100": "#E7E0FD",
          "primary-500": "#7562E0",
          "gray-lighter-2": "#F7F9FC",
          "gray-1": "#333333",
          "gray-3": "#828282",
        },
        default: {
          /// Shades
          primary: "#DD5353",
          "shade-2": "#BB343A",
          "shade-3": "#9A0D22",
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
        "dm-sans": ["DM Sans", "sans-serif"],
      },
    },
  },
  plugins: [require("@tailwindcss/line-clamp")],
  corePlugins: {
    preflight: false, // To solve conflick between ant design css & tailwind css
  },
};
