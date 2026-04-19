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
        primary: "#bb0004",
        "primary-container": "#e1251b",
        secondary: "#0061a3",
        tertiary: "#006a2c",
        "on-surface": "#1c1b1b",
        "on-surface-variant": "#5d3f3b",
        "outline-variant": "#e7bdb7",
        "surface-container-low": "#f6f3f2",
      },
      fontFamily: {
        serif: ["var(--font-newsreader)", "serif"],
        sans: ["var(--font-public-sans)", "sans-serif"],
      },
    },
  },
  plugins: [],
};
export default config;
