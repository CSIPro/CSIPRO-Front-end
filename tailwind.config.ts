import type { Config } from "tailwindcss";
import tailwindcssAnimate from "tailwindcss-animate";

const config = {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}",
  ],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      backgroundImage: {
        "circuit-board": "url('/assets/patterns/circuit-board.svg')",
      },
      fontFamily: {
        sans: ["var(--font-geist-sans)"],
        poppins: ["var(--font-poppins)"],
      },
      colors: {
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
        floating: {
          "0%": { transform: "translate(0,  0px);" },
          "50%": { transform: "translate(0, 8px);" },
          "100%": { transform: "translate(0, -0px);" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
        floating: "floating 5s ease-in-out infinite",
      },
    },
  },
  plugins: [
    tailwindcssAnimate,
    function ({
      addUtilities,
    }: {
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      addUtilities: (utilities: Record<string, any>) => void;
    }) {
      const newUtilities = {
        ".gradient-border": {
          position: "relative",
          "&::before": {
            content: '""',
            position: "absolute",
            top: 0,
            right: 0,
            bottom: 0,
            left: 0,
            borderTop: "1px solid",
            borderRight: "1px solid",
            borderBottom: "1px solid",
            borderImage:
              "linear-gradient(170deg, rgba(0,199,146,1) 0%, rgba(255,158,69,1) 32%, rgba(252,143,255,1) 66%, rgba(137,95,233,1) 100%) 1",
            zIndex: "0",
          },
        },
      };
      addUtilities(newUtilities);
    },
  ],
} satisfies Config;

export default config;
