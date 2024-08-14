import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/component/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontSize:{
        "chapter":"45px",
        "heading": "30px",
        "main-heading":"24px",
        "sub-heading": "22px",
        "xlarge":"20px",
        "large":"18px",
        "medium":"16px",
        "small": "14px",
        "xsmall":"12px"
      }
    },
  },
  plugins: [],
};
export default config;
