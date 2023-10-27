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
      gridAutoRows: {
        cards: "minmax(300px, 300px)",
      },
      borderRadius: {
        "4xl": "35px",
      },
      fontSize: {
        large: ["60px", { lineHeight: "54px" }],
        medium: "45px",
        small: ["22px", { lineHeight: "18px" }],
        small2: ["20px", { lineHeight: "18px" }],
      },
    },
  },
  plugins: [],
};
export default config;
