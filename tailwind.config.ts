import type { Config } from "tailwindcss";

export default {
  content: ["./src/components/**/*.{ts,tsx}", "./src/app/**/*.{ts,tsx}"],
  theme: {
    extend: {
      screens: {
        sm: "375px",
      },
      fontFamily: {
        exo2: ["var(--font-exo2)", "sans-serif"],
        alegreya: ["var(--font-alegreya)", "serif"],
      },
      colors: {
        darkGrey: "#645E58",
        lightGrey: "#B5AFAE",
        black: "#2B2423",
        white: "#FAF8F0",
      },
      fontSize: {
        "h1-sm": [
          "36px",
          {
            fontWeight: 600,
            lineHeight: "20px",
          },
        ],
        "h2-sm": [
          "32px",
          {
            fontWeight: 500,
            lineHeight: "20px",
          },
        ],
        "h3-sm": [
          "20px",
          {
            fontWeight: 500,
            lineHeight: "20px",
          },
        ],
        "button-sm": [
          "20px",
          {
            fontWeight: 500,
            lineHeight: "20px",
          },
        ],
        "link-sm": [
          "20px",
          {
            fontWeight: 400,
            lineHeight: "20px",
          },
        ],
        "regular-sm": [
          "14px",
          {
            fontWeight: 400,
            lineHeight: "20px",
          },
        ],
        "captions-sm": [
          "13px",
          {
            fontWeight: 400,
            lineHeight: "20px",
          },
        ],
      },
    },
  },
  plugins: [],
} as Config;
