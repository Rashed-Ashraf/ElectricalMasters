import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: "#0098da",
          hover: "#0084bd",
          active: "#006f9e",
          container: "#0098da",
          fixed: "#c9e6ff",
          "fixed-dim": "#8bceff",
        },
        secondary: {
          DEFAULT: "#0076a8",
          container: "#e1f2fb",
          fixed: "#c7e7ff",
          "fixed-dim": "#96cdf4",
        },
        tertiary: {
          DEFAULT: "#005677",
          container: "#457b98",
        },
        petrol: {
          dark: "#004d6d",
          deep: "#003d57",
          footer: "#003248",
          navy: "#003850",
          card: "#002b40",
        },
        surface: {
          DEFAULT: "#f2f8fc",
          bright: "#ffffff",
          dim: "#c7dbff",
          variant: "#e1f0f8",
          tint: "#0098da",
          container: "#e9f3f9",
          "container-low": "#f0f6fa",
          "container-lowest": "#ffffff",
          "container-high": "#e1f0f9",
          "container-highest": "#d5e3ff",
        },
        "on-surface": "#00283d",
        "on-surface-variant": "#3e5261",
        "sky-accent": "#0098da",
        error: {
          DEFAULT: "#ba1a1a",
          container: "#ffdad6",
        },
      },
      fontFamily: {
        title: ["var(--font-montserrat)", "Montserrat", "sans-serif"],
        display: ["var(--font-montserrat)", "Montserrat", "sans-serif"],
        headline: ["var(--font-montserrat)", "Montserrat", "sans-serif"],
        body: ["var(--font-roboto-flex)", "Roboto Flex", "sans-serif"],
        technical: ["var(--font-roboto-flex)", "Roboto Flex", "monospace"],
      },
      borderRadius: {
        DEFAULT: "0.125rem",
        lg: "0.25rem",
        xl: "0.5rem",
        "2xl": "0.75rem",
        full: "9999px",
      },
      spacing: {
        "space-2xs": "0.25rem",
        "space-xs": "0.5rem",
        "space-sm": "0.75rem",
        "space-md": "1rem",
        "space-lg": "1.5rem",
        "space-xl": "2rem",
        "space-2xl": "3rem",
        "space-3xl": "4.5rem",
        "gutter-mobile": "1rem",
        "gutter-desktop": "1.5rem",
        "grid-max-width": "1280px",
      },
    },
  },
  plugins: [],
};

export default config;
