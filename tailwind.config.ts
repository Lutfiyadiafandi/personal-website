import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./common/**/*.{js,ts,jsx,tsx,mdx}",
    "./views/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: "class",
  theme: {
    screens: {
      sm: "640px",
      md: "768px",
      lg: "1024px",
      xl: "1280px",
      "2xl": "1400px",
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
        display1: ["60px", { lineHeight: "72.45px" }],
        display2: ["56px", { lineHeight: "67.77px" }],
        "heading-num": ["120px", { lineHeight: "100px" }],
        "heading-xl": ["48px", { lineHeight: "58.09px" }],
        "heading-l": ["40px", { lineHeight: "48.41px" }],
        "heading-m": ["32px", { lineHeight: "38.73px" }],
        "heading-s": ["28px", { lineHeight: "34px" }],
        "type-xl": ["24px", { lineHeight: "29.05px" }],
        "type-l": ["20px", { lineHeight: "24.2px" }],
        "type-m": ["18px", { lineHeight: "24px" }],
        "type-s": ["16px", { lineHeight: "22.36px" }],
        subheading: ["14px", { lineHeight: "13px" }],
        "label-xl": ["12px", { lineHeight: "14.52px" }],
        "label-l": ["10px", { lineHeight: "12.1px" }],
        "label-m": ["8px", { lineHeight: "9.68px" }],
      },
      colors: {
        night: "#0A0A0A",
        "sec-night": "#1F1F1F",
        // day: "#EFEFEF",
        day: "#F5F5F5",
        "sec-day": "#E1E1E1",
        secondary: "#808080",
        secondary2: "#A9A9A9",
        "primary-300": "#013C58",
        "primary-200": "#00537A",
        "primary-100": "#A8E8F9",
      },
    },
  },
  plugins: [],
};
export default config;
