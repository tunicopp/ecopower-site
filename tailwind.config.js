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
