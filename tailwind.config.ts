import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "class",
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./data/**/*.{js,ts,jsx,tsx,mdx}",
    "./lib/**/*.{js,ts,jsx,tsx,mdx}"
  ],
  theme: {
    extend: {
      colors: {
        midnight: "#0F172A",
        brand: "#4F46E5",
        passion: "#F97316",
        growth: "#10B981",
        skyflow: "#38BDF8",
        surface: "#F8FAFC",
        ink: "#111827",
        muted: "#64748B"
      },
      boxShadow: {
        soft: "0 18px 50px rgba(15, 23, 42, 0.12)",
        glow: "0 18px 45px rgba(79, 70, 229, 0.22)"
      }
    }
  },
  plugins: []
};

export default config;
