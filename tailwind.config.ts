import type { Config } from "tailwindcss";

export default {
  content: ["./src/components/**/*.{ts,tsx}", "./src/app/**/*.{ts,tsx}"],
  theme: {
    extend: {
      screens: {
        xs: "340px",
        sm: "375px",
      },
      spacing: {
        section: "60px",
        xs: "5px",
      },
      fontFamily: {
        exo2: ["var(--font-exo_2)", "sans-serif"],
      },
      colors: {
        darkGrey: "#645E58",
        lightGrey: "#ECE8E7",
        error: "#FF4444",
        black: "#2B2423",
        white: "#FAF8F0",
        "primary-black": "rgba(43, 36, 35, 0.85)",
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
            lineHeight: "38.4px",
          },
        ],
        smd: [
          "16px",
          {
            fontWeight: 400,
            lineHeight: "22.4px",
          },
        ],
        base: [
          "20px",
          {
            fontWeight: 500,
            lineHeight: "24px",
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
        xxs: "10px",
      },
    },
  },
  safelist: [
    {
      pattern: /row-span-(2|3)/,
    },
  ],
  plugins: [],
} as Config;
