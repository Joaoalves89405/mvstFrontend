/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "hero-coffee": "url('/coffee-hero.jpg')",
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        primary: "#BA8039",
        secondary: "#938E8E",
        tertiary: "#D3AD7F",
        background: "#191919",
        backgroundSecondary: "#383838",
        arabic: "#77A9B0",
        robusta: "#3A383D",
        label: "#9b9b9b",
        inputBackground: "#2D2D2D",
        grayPlaceholder: "#838382",
      },
      fontSize: {
        xs: "0.875rem",
        lg: "1.25rem",
        xl: "1.5rem",
      },
    },
  },
  plugins: [],
};
