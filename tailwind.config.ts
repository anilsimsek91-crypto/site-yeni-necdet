import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        void: "#0E0E0E",
        dark: "#151412",
        iron: "#282725",
        cream: "#F2ECDA",
        parchment: "#E7DEC6",
        stone: "#C8B49A",
        sand: "#D8C8A9",
        linen: "#E5E1D6",
        bronze: "#8B7650",
      },
      fontFamily: {
        serif: ["var(--font-serif)", "Georgia", "serif"],
        sans: ["var(--font-sans)", "system-ui", "sans-serif"],
      },
      letterSpacing: {
        widest: "0.25em",
      },
      maxWidth: {
        editorial: "1320px",
      },
    },
  },
  plugins: [],
};

export default config;
