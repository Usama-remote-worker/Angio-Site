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
        primary: {
          DEFAULT: "#E1251B",
          dark: "#bb0004",
          container: "#ffdad5",
        },
        secondary: {
          DEFAULT: "#1F6FB2",
          dark: "#0061a3",
          container: "#d1e4ff",
        },
        accent: {
          DEFAULT: "#2E9E4F",
          dark: "#006a2c",
          container: "#8cfa9f",
        },
        neutral: {
          DEFAULT: "#1A1A1A",
          surface: "#fcf9f8",
          outline: "#926f69",
        },
      },
      fontFamily: {
        serif: ["var(--font-newsreader)", "serif"],
        sans: ["var(--font-public-sans)", "sans-serif"],
      },
      spacing: {
        'stack-lg': '64px',
        'stack-md': '32px',
        'stack-sm': '16px',
      },
      borderRadius: {
        'sm': '0.125rem',
        'DEFAULT': '0.25rem',
        'md': '0.375rem',
        'lg': '0.5rem',
        'xl': '0.75rem',
      },
    },
  },
  plugins: [],
};
export default config;
