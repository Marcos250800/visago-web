import type { Config } from "tailwindcss";

/**
 * VisaGo — Sistema de diseño monocromo.
 * Paleta estrictamente B/N + escala de grises derivada del logo.
 * Tipografía: Geist (display/sans) + Geist Mono (etiquetas técnicas / números).
 */
const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    container: {
      center: true,
      padding: { DEFAULT: "1.25rem", md: "2rem", lg: "2.5rem" },
      screens: { "2xl": "1280px" },
    },
    extend: {
      colors: {
        // Tokens semánticos (controlados por sección, sin auto dark-mode)
        background: "var(--background)",
        foreground: "var(--foreground)",
        ink: {
          DEFAULT: "#0a0a0b",
          soft: "#16161a",
        },
        paper: {
          DEFAULT: "#ffffff",
          soft: "#f6f6f5",
        },
        // Escala de grises monocroma
        neutral: {
          50: "#f7f7f6",
          100: "#ededec",
          200: "#dcdcda",
          300: "#bcbcb9",
          400: "#94948f",
          500: "#74746f",
          600: "#5a5a56",
          700: "#444442",
          800: "#2a2a29",
          900: "#1a1a19",
          950: "#0d0d0c",
        },
      },
      fontFamily: {
        sans: ["var(--font-geist-sans)", "system-ui", "sans-serif"],
        display: ["var(--font-geist-sans)", "system-ui", "sans-serif"],
        mono: ["var(--font-geist-mono)", "ui-monospace", "monospace"],
      },
      fontSize: {
        // Escala display para titulares editoriales
        "display-sm": ["clamp(2.5rem, 6vw, 3.75rem)", { lineHeight: "0.95", letterSpacing: "-0.03em" }],
        "display": ["clamp(3.25rem, 9vw, 6.5rem)", { lineHeight: "0.92", letterSpacing: "-0.04em" }],
        "display-lg": ["clamp(4rem, 13vw, 11rem)", { lineHeight: "0.88", letterSpacing: "-0.045em" }],
      },
      letterSpacing: {
        tightest: "-0.045em",
        kicker: "0.18em",
      },
      maxWidth: {
        prose: "68ch",
      },
      transitionTimingFunction: {
        smooth: "cubic-bezier(0.16, 1, 0.3, 1)",
      },
      keyframes: {
        "fade-up": {
          from: { opacity: "0", transform: "translateY(16px)" },
          to: { opacity: "1", transform: "translateY(0)" },
        },
        marquee: {
          from: { transform: "translateX(0)" },
          to: { transform: "translateX(-50%)" },
        },
        "spin-slow": {
          to: { transform: "rotate(360deg)" },
        },
      },
      animation: {
        "fade-up": "fade-up 0.7s cubic-bezier(0.16,1,0.3,1) both",
        marquee: "marquee 28s linear infinite",
        "spin-slow": "spin-slow 22s linear infinite",
      },
    },
  },
  plugins: [],
};
export default config;
