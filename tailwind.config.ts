import type { Config } from "tailwindcss";

export default {
  content: ["./src/components/**/*.{ts,tsx}", "./src/app/**/*.{ts,tsx}"],
  theme: {
    extend: {
      screens: {
        sm: "375px",
      },
      fontFamily: {
        exo2: ["var(--font-exo_2)", "sans-serif"],
        alegreya: ["var(--font-alegreya)", "serif"],
      },
      colors: {
        darkGrey: "#645E58",
        lightGrey: "#B5AFAE",
        black: "#2B2423",
        white: "#FAF8F0",
        "primary-black": "rgba(43, 36, 35, 0.8)",
      },
      fontSize: {
        xl: [
          "64px",
          {
            fontWeight: 600,
            lineHeight: "40px",
          },
        ],
        xmd: [
          "36px",
          {
            fontWeight: 600,
            lineHeight: "40px",
          },
        ],
        md: [
          "32px",
          {
            fontWeight: 500,
            lineHeight: "20px",
          },
        ],
        base: [
          "20px",
          {
            fontWeight: 500,
            lineHeight: "20px",
          },
        ],
        "base-thin": [
          "20px",
          {
            fontWeight: 400,
            lineHeight: "20px",
          },
        ],
        sm: [
          "14px",
          {
            fontWeight: 400,
            lineHeight: "20px",
          },
        ],
        xs: [
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
