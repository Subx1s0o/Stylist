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
    },
  },
  plugins: [],
};
export default config;
