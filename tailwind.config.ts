import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      screens: {
        sm: "375px",
      },
      fontFamily: {
        exo: ["'Exo 2'", "sans-serif"],
        alegreya: ["'Alegreya'", "serif"],
      },
      colors: {
        darkGrey: "#645E58",
        lightGrey: "#B5AFAE",
        black: "#2B2423",
        white: "#FAF8F0",
      },
      textStyles: {
        mobileH1: {
          fontSize: "36px",
          fontWeight: "600",
          color: "#000000",
          lineHeight: "20px",
        },
        mobileH2: {
          fontSize: "32px",
          fontWeight: "500",
          color: "#000000",
          lineHeight: "20px",
        },
        mobileH3: {
          fontSize: "20px",
          fontWeight: "500",
          color: "#000000",
          lineHeight: "20px",
        },
        mobileButton: {
          fontSize: "20px",
          fontWeight: "500",
          lineHeight: "20px",
        },

        MobileMenuLink: {
          fontSize: "20px",
          fontWeight: "400",
          lineHeight: "20px",
        },
        mobileRegular: {
          fontSize: "14px",
          fontWeight: "400",
          lineHeight: "20px",
        },
        mobileCaptions: {
          fontSize: "13px",
          color: "#000000",
          fontWeight: "400",
          lineHeight: "20px",
        },
      },
    },
  },
  plugins: [],
};
export default config;
