import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary:{
          DEFAULT: "#004040",
          40: "#00404099",
        },
        secondary:{
          DEFAULT: "#00AA28",
          40: "#00AA2866",
        },
        terciary:{
          DEFAULT: "#46DA69",
          20: "#46DA6933",
        },
        quarternary:{
          DEFAULT: "#002828",
          40: "#00282866",
        },
        quintenary:{
          DEFAULT: "#006060",
          50: "#00606080",
        },
        black10: "#0000001A",
      },
    },
  },
  plugins: [],
};
export default config;
