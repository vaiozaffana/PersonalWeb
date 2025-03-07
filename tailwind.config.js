// tailwind.config.js
const { nextui } = require("@nextui-org/react");

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        light: "#f5f5f5",
        darkGray: "#1b1b1b",
        primaryDark: "#58E6D9"
      },
      animation: {
        'spin-slow': 'spin 8s linear infinite',
      },
      backgroundImage: {
        // circularLight: 'repeating-radial-gradient(#f5f5f5 2px, #1b1b1b 5px, #1b1b1b 100px);',
        // circularLightLg: 'repeating-radial-gradient(#f5f5f5 2px, #1b1b1b 5px, #1b1b1b 80px);'

        circularLight:
        "repeating-radial-gradient(2px,#f5f5f5 5px,#f5f5f5 100px)",

    circularDark:
        "repeating-radial-gradient(#f5f5f5 2px,#1b1b1b 5px,#1b1b1b 100px)",

    circularLightLg:
        "repeating-radial-gradient(2px,#f5f5f5 5px,#f5f5f5 80px)",

    circularDarkLg:
        "repeating-radial-gradient(#f5f5f5 2px,#1b1b1b 5px,#1b1b1b 80px)",

    circularLightMd:
        "repeating-radial-gradient(2px,#f5f5f5 5px,#f5f5f5 60px)",

    circularDarkMd:
        "repeating-radial-gradient(#f5f5f5 2px,#1b1b1b 5px,#1b1b1b 60px)",

    circularLightSm:
        "repeating-radial-gradient(2px,#f5f5f5 5px,#f5f5f5 40px)",

    circularDarkSm:
        "repeating-radial-gradient(#f5f5f5 2px,#1b1b1b 5px,#1b1b1b 50px)",
      }
    },
    screens: {
      "2xl": { max: "1535px" },
      // => @media (max-width: 1535px) { ... }
  
      xl: { max: "1279px" },
      // => @media (max-width: 1279px) { ... }
  
      lg: { max: "1023px" },
      // => @media (max-width: 1023px) { ... }
  
      md: { max: "767px" },
      // => @media (max-width: 767px) { ... }
  
      sm: { max: "639px" },
      // => @media (max-width: 639px) { ... }
  
      xs: { max: "479px" },
      // => @media (max-width: 479px) { ... }
  },
  },
  darkMode: "class",
  plugins: [nextui({ addCommonColors: true })],
};
