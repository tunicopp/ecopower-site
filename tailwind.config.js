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
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
    colors: {
      "primary-green": "#01B040",
      "blue-dark": "#050245",
      "blue-soft-dark": "#240697",
      "blue-light": "#2E90EB",
      grayscale: {
        900: "#12131A",
        800: "#191C24",
        700: "#3E455B",
        600: "#4A536D",
        300: "#8790AB",
        200: "#B3BACE",
        100: "#E5E8F0",
        50: "#F6F7FC",
        white: "#FFFFFF",
      },
      secondary: {
        1: "#43088F",
        2: "#7120D9",
        3: "#9B53F9",
        4: "#F1E5FF",
        "card-bg": "url('/public/assets/images/img-card.png')",
      },
      colors: {
        "font-black": "#262833",
      },

      keyframes: {
        fly: {
          "0%": { transform: "translate(0%)" },
          "50%": { transform: "translate(250%)" },
          "100%": { transform: "translate(0%)" },
        },
        fly2: {
          "0%": { transform: "translate(0%)" },
          "50%": { transform: "translate(-180%)" },
          "100%": { transform: "translate(0%)" },
        },
      },
      animation: {
        fly: "fly 50s linear infinite",
        fly2: "fly2 40s linear infinite",
      },
    },
  },
  plugins: [],
};
