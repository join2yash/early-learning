/** @type {import('tailwindcss').Config} */

export default {
  content: [
    "./index.html",
    "./Src/**/*.{js,jsx}",
  ],

  theme: {
    extend: {
      colors: {
        indigo: {
          DEFAULT: "#1D3557",
          light: "#2E4C78",
          dark: "#132743",
        },

        gold: {
          DEFAULT: "#F4B740",
          light: "#FBD98A",
          dark: "#D89A22",
        },

        sky: {
          DEFAULT: "#EAF4FB",
          deep: "#D3E9F7",
        },

        coral: {
          DEFAULT: "#EF8354",
          light: "#F5A87E",
        },

        cream: {
          DEFAULT: "#FFFAF2",
          dark: "#F7F0E4",
        },

        ink: "#24313F",
      },

      fontFamily: {
        display: ["'Baloo 2'", "cursive"],
        body: ["'Inter'", "sans-serif"],
      },

      borderRadius: {
        blob: "40% 60% 55% 45% / 45% 40% 60% 55%",
      },
    },
  },

  plugins: [],
};
