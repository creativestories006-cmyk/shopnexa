import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        ink: {
          DEFAULT: "#0A0A0B",
          soft: "#141316",
        },
        paper: {
          DEFAULT: "#F7F4EF",
          dim: "#EDE9E1",
        },
        bone: "#F5F3EF",
        char: "#16151A",
        muted: "#8A8780",
        accent: {
          DEFAULT: "#FF5A36",
          glow: "#FF7A54",
        },
        tint: {
          tech: "#2952E3",
          fashion: "#C23B5E",
          beauty: "#D98CC2",
          home: "#4E8C6B",
          fitness: "#E0A526",
          lifestyle: "#7C5CBF",
        },
        deal: "#E63946",
      },
      fontFamily: {
        display: ["var(--font-display)", "sans-serif"],
        serif: ["var(--font-serif)", "serif"],
        sans: ["var(--font-sans)", "sans-serif"],
        mono: ["var(--font-mono)", "monospace"],
      },
      fontSize: {
        "hero-mobile": "clamp(2.75rem, 12vw, 4.5rem)",
        "hero-desktop": "clamp(4rem, 8vw, 8.5rem)",
      },
      letterSpacing: {
        tightest: "-0.04em",
      },
      transitionTimingFunction: {
        cinematic: "cubic-bezier(0.16, 1, 0.3, 1)",
      },
    },
  },
  plugins: [],
};
export default config;
