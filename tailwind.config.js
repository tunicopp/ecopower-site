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
      objectPosition: {
        "pessoas-hero": "35% top",
      },
      boxShadow: {
        calculator: "0px 32px 32px 0px rgba(55, 47, 25, 0.05);",
      },
      dropShadow: {
        "eco-power-icon": "0px 4px 108px rgba(0, 0, 0, 0.16)",
        tooltip: "0px 4px 28px rgba(0, 0, 0, 0.10)",
      },
      fontFamily: {
        montserrat: ["var(--font-montserrat)"],
        "golos-text": ["var(--font-golos-text)"],
      },
      height: {
        "height-mobile": "calc(100vh - 129px)",
      },
    },
    colors: {
      "primary-green": "#01B040",
      "hero-green": "#01AC3F",
      "banner-two": "#0C7E40",
      "banner-three": "#D9D3C3",
      "hover-map": "#01802E",
      "green-200": "#4AF387",
      "blue-dark": "#050245",
      "blue-soft-dark": "#240697",
      "blue-light": "#2E90EB",
      grayscale: {
        900: "#12131A",
        800: "#191C24",
        700: "#3E455B",
        600: "#4A536D",
        300: "#8790AB",
        400: "#6F717B",
        200: "#B3BACE",
        100: "#E5E8F0",
        50: "#F6F7FC",
      },
      "grey-100": "#76787B",
      transparent: "transparent",
      white: "#FFFFFF",
      "font-black": "#262833",
      black: "#2F3133",
      "full-black": "#000000",
      dark: "#0D0C0C",
      "beige-300": "#F8F6F1",
      "beige-200": "#EBE7DF",
      "slide-description": "#5A5C6B",
      "testimonial-location": "#797A80",
      campaing: "#FAF9F8",
      secondary: {
        1: "#43088F",
        2: "#7120D9",
        3: "#9B53F9",
        4: "#F1E5FF",
        "card-bg": "url('/public/assets/images/img-card.png')",
      },
      "hover-dropdown": "rgba(0, 0, 0, 0.05)",
      "radio-border": "rgba(118, 120, 123, 0.30)",
      danger: "#FF6464",
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
  plugins: [],
};
