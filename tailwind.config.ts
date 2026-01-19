// tailwind.config.ts
import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        brand: {
          primary: "#1769aa",
          dark: "#0f3557",
          accent: "#ffcc33",
          mutedBg: "#f5f7fb"
        }
      },
      borderRadius: {
        pill: "9999px"
      },
      boxShadow: {
        soft: "0 10px 30px rgba(15,53,87,0.18)"
      }
    }
  },
  plugins: []
};

export default config;
