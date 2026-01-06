import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          navy: "#0A192F",
          gold: "#D4AF37",
          goldLight: "#F9E2AF",
          red: "#E63946",
          blue: "#3A86FF",
        },
      },
    },
  },
  plugins: [],
};
export default config;