import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    screens: {
      sm: "640px",
      // => @media (min-width: 640px) { ... }

      md: "768px",
      // => @media (min-width: 768px) { ... }

      lg: "1024px",
      // => @media (min-width: 1024px) { ... }

      xl: "1280px",
      // => @media (min-width: 1280px) { ... }

      "2xl": "1400px",
      // => @media (min-width: 1536px) { ... }
    },
    extend: {
      fontFamily: {
        plusjakarta: ["var(--font-plus-jakarta)"],
      },
      gridAutoRows: {
        cards: "minmax(300px, 300px)",
      },
      borderRadius: {
        "4xl": "35px",
      },
      fontSize: {
        heading: ["60px", { lineHeight: "54px" }],
        heading2: ["54px", { lineHeight: "50px" }],
        headingnum: ["49px", { lineHeight: "49px" }],
        large: ["36px", { lineHeight: "34px" }],
        large2: ["24px", { lineHeight: "26px" }],
        medium: ["20px", { lineHeight: "18px" }],
        medium2: ["18px", { lineHeight: "24px" }],
        desc: ["18px", { lineHeight: "22px" }],
        small: ["16px", { lineHeight: "22px" }],
        subheading: ["14px", { lineHeight: "13px" }],
      },
    },
  },
  plugins: [],
};
export default config;
