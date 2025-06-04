
import type { Config } from "tailwindcss";

const config: Config = {
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
      padding: '2rem',
      screens: {
        '2xl': '1400px'
      }
    },
    extend: {
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
      },
      colors: {
        // PRAVADO Brand Colors
        disruptor: {
          DEFAULT: "#ff6b35",
          50: "#fff7f0",
          100: "#ffeee0",
          200: "#ffd9b8",
          300: "#ffbd85",
          400: "#ff9750",
          500: "#ff6b35",
          600: "#f04822",
          700: "#c73418",
          800: "#9e2c18",
          900: "#7f2818",
          950: "#44120a"
        },
        authority: {
          DEFAULT: "#c3073f",
          50: "#fef2f3",
          100: "#fce7e9",
          200: "#f9d3d8",
          300: "#f3b0ba",
          400: "#ec8399",
          500: "#e1577a",
          600: "#cc3861",
          700: "#c3073f",
          800: "#a31e47",
          900: "#8a1e43",
          950: "#4d0a21"
        },
        executive: {
          DEFAULT: "#1e3d59",
          50: "#f0f6ff",
          100: "#e0ecff",
          200: "#c7ddff",
          300: "#a5c9ff",
          400: "#82abff",
          500: "#658cff",
          600: "#4b6ef5",
          700: "#3c56e1",
          800: "#3147b5",
          900: "#2e3f8f",
          950: "#1e3d59"
        },
        visionary: {
          DEFAULT: "#6f2dbd",
          50: "#faf7ff",
          100: "#f2edff",
          200: "#e7ddff",
          300: "#d4c0ff",
          400: "#bb95ff",
          500: "#a365ff",
          600: "#9340ff",
          700: "#822be6",
          800: "#6f2dbd",
          900: "#5b2499",
          950: "#3d1166"
        },
        "neon-success": "#00ff88",
        "pristine-white": "#f8f9fa",
        
        // NUCLEAR YELLOW ELIMINATION - FORCED OVERRIDE
        yellow: {
          50: "#f9fafb",
          100: "#f3f4f6",
          200: "#e5e7eb",
          300: "#d1d5db",
          400: "#ff6b35", // Disruptor Orange replacement
          500: "#c3073f", // Authority Crimson replacement
          600: "#4b5563",
          700: "#374151",
          800: "#1f2937",
          900: "#111827",
        },
        amber: {
          50: "#f9fafb",
          100: "#f3f4f6",
          200: "#e5e7eb",
          300: "#d1d5db",
          400: "#ff6b35", // Disruptor Orange replacement
          500: "#c3073f", // Authority Crimson replacement
          600: "#4b5563",
          700: "#374151",
          800: "#1f2937",
          900: "#111827",
        },
        
        border: 'hsl(var(--border))',
        input: 'hsl(var(--input))',
        ring: 'hsl(var(--ring))',
        background: 'hsl(var(--background))',
        foreground: 'hsl(var(--foreground))',
        primary: {
          DEFAULT: "#c3073f",
          foreground: "#ffffff",
        },
        secondary: {
          DEFAULT: "#ff6b35",
          foreground: "#ffffff",
        },
        destructive: {
          DEFAULT: 'hsl(var(--destructive))',
          foreground: 'hsl(var(--destructive-foreground))'
        },
        muted: {
          DEFAULT: 'hsl(var(--muted))',
          foreground: 'hsl(var(--muted-foreground))'
        },
        accent: {
          DEFAULT: 'hsl(var(--accent))',
          foreground: 'hsl(var(--accent-foreground))'
        },
        popover: {
          DEFAULT: 'hsl(var(--popover))',
          foreground: 'hsl(var(--popover-foreground))'
        },
        card: {
          DEFAULT: 'hsl(var(--card))',
          foreground: 'hsl(var(--card-foreground))'
        },
      },
      backgroundImage: {
        "pravado-gradient": "linear-gradient(135deg, #1e3d59 0%, #6f2dbd 100%)",
      },
      borderRadius: {
        lg: 'var(--radius)',
        md: 'calc(var(--radius) - 2px)',
        sm: 'calc(var(--radius) - 4px)'
      },
      keyframes: {
        'accordion-down': {
          from: {
            height: '0'
          },
          to: {
            height: 'var(--radix-accordion-content-height)'
          }
        },
        'accordion-up': {
          from: {
            height: 'var(--radix-accordion-content-height)'
          },
          to: {
            height: '0'
          }
        }
      },
      animation: {
        'accordion-down': 'accordion-down 0.2s ease-out',
        'accordion-up': 'accordion-up 0.2s ease-out'
      }
    }
  },
  plugins: [require("tailwindcss-animate")],
};

export default config;
