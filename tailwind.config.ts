import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/app/**/*.{ts,tsx}",
    "./src/components/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        navy: {
          950: "#040a18",
          900: "#0a1628",
          800: "#0f2038",
          700: "#162d4d",
          600: "#1e3a5f",
        },
        gold: {
          500: "#c9a84c",
          400: "#d4b95f",
          300: "#e0cc7a",
        },
        accent: {
          blue: "#2d7ff9",
          cyan: "#22d3ee",
        },
      },
      fontFamily: {
        heading: ["Inter", "system-ui", "sans-serif"],
        body: ["Inter", "system-ui", "sans-serif"],
      },
    },
  },
  plugins: [],
};

export default config;
