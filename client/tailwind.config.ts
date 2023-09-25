import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      padding: {
        15: "60px",
      },
      colors: {
        cBlack: "#161518",
        cLightBlack: "#302d34",
        cGray: "#757575",
        cWhite: "#f7f7f4",
        cGold: "#DFB252",
      },
    },
  },
  plugins: [],
};
export default config;
