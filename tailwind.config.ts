import type { Config } from "tailwindcss"

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
    "*.{js,ts,jsx,tsx,mdx}"
  ],
  theme: {
    extend: {
      colors: {
        primary: "#6366f1",
        secondary: "#8b5cf6",
        accent: "#a855f7",
        background: "#FFFFFF",
        "primary-light": "#818cf8",
        "primary-dark": "#4f46e5",
        "secondary-light": "#a78bfa",
        "secondary-dark": "#7c3aed",
        "accent-light": "#c084fc",
        "accent-dark": "#9333ea",
        "text-light": "#333333",
        "text-lighter": "#666666",
        "text-lightest": "#999999",
        surface: "#FAFAFA",
        "surface-dark": "#F5F5F5",
      },
      animation: {
        "fade-in-up": "fadeInUp 0.6s ease-out forwards",
        "bounce-slow": "bounce 3s infinite",
        "pulse-glow": "pulseGlow 2s ease-in-out infinite",
        "gradient-shift": "gradientShift 3s ease-in-out infinite",
        float: "float 6s ease-in-out infinite",
        "slide-in-left": "slideInLeft 0.3s ease-out forwards",
        "slide-in-right": "slideInRight 0.3s ease-out forwards",
        "slide-out-right": "slideOutRight 0.3s ease-in forwards",
      },
      keyframes: {
        fadeInUp: {
          "0%": {
            opacity: "0",
            transform: "translateY(30px)",
          },
          "100%": {
            opacity: "1",
            transform: "translateY(0)",
          },
        },
        pulseGlow: {
          "0%, 100%": {
            boxShadow: "0 0 5px rgba(139, 92, 246, 0.3)",
          },
          "50%": {
            boxShadow: "0 0 20px rgba(139, 92, 246, 0.6), 0 0 30px rgba(168, 85, 247, 0.3)",
          },
        },
        gradientShift: {
          "0%, 100%": {
            backgroundPosition: "0% 50%",
          },
          "50%": {
            backgroundPosition: "100% 50%",
          },
        },
        float: {
          "0%, 100%": {
            transform: "translateY(0px)",
          },
          "50%": {
            transform: "translateY(-20px)",
          },
        },
        slideInLeft: {
          "0%": {
            opacity: "0",
            transform: "translateX(-100%)",
          },
          "100%": {
            opacity: "1",
            transform: "translateX(0)",
          },
        },
        slideInRight: {
          "0%": {
            opacity: "0",
            transform: "translateX(100%)",
          },
          "100%": {
            opacity: "1",
            transform: "translateX(0)",
          },
        },
        slideOutRight: {
          "0%": {
            opacity: "1",
            transform: "translateX(0)",
          },
          "100%": {
            opacity: "0",
            transform: "translateX(100%)",
          },
        },
      },
      backdropBlur: {
        xs: "2px",
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
    },
  },
}

export default config
