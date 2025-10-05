import type { Config } from "tailwindcss";

export default {
  darkMode: ["class"],
  content: ["./pages/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}", "./app/**/*.{ts,tsx}", "./src/**/*.{ts,tsx}"],
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
      colors: {
        // Brand colors
        ecstasy: "hsl(var(--ecstasy))",
        "mine-shaft": "hsl(var(--mine-shaft))",
        "spring-wood": "hsl(var(--spring-wood))",
        mandalay: "hsl(var(--mandalay))",
        "nutmeg-wood": "hsl(var(--nutmeg-wood))",
        leather: "hsl(var(--leather))",
        "sorrell-brown": "hsl(var(--sorrell-brown))",
        boulder: "hsl(var(--boulder))",
        
        // Design system tokens
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

      // fontFamily: {
      //   sans: ['Inter', 'system-ui', 'sans-serif'],
      //   heading: ['Poppins', 'Inter', 'system-ui', 'sans-serif'],
      //   space: ['Space Grotesk', 'sans-serif'],
      // },

      fontFamily: {
        // sans: ['Inter', 'system-ui', 'sans-serif'],
        // heading: ['Poppins', 'Inter', 'system-ui', 'sans-serif'],

        // --- Active (Space Grotesk for both body + headings) ---
         sans: ['Space Grotesk', 'Inter', 'system-ui', 'sans-serif'],
         heading: ['Space Grotesk', 'Poppins', 'Inter', 'system-ui', 'sans-serif'],

        // --- Alternative 1: Orbitron (futuristic headings, clean body) ---
        // sans: ['Inter', 'system-ui', 'sans-serif'], // keep body text clean
       // heading: ['Orbitron', 'sans-serif'],


        // --- Alternative 2: Rajdhani ---
        // sans: ['Rajdhani', 'system-ui', 'sans-serif'],
        // heading: ['Rajdhani', 'sans-serif'],

        // --- Alternative 3: Exo 2 ---
        // sans: ['Exo 2', 'system-ui', 'sans-serif'],
        // heading: ['Exo 2', 'sans-serif'],

        // --- Alternative 4: IBM Plex Sans ---
        // sans: ['IBM Plex Sans', 'system-ui', 'sans-serif'],
        // heading: ['IBM Plex Sans', 'sans-serif'],

        // --- Alternative 5: Montserrat ---
        // sans: ['Montserrat', 'system-ui', 'sans-serif'],
        // heading: ['Montserrat', 'sans-serif'],
      },



      backgroundImage: {
        'gradient-hero': 'var(--gradient-hero)',
        'gradient-card': 'var(--gradient-card)',
      },
      boxShadow: {
        'card': 'var(--shadow-card)',
        'hero': 'var(--shadow-hero)',
      },
      transitionTimingFunction: {
        'smooth': 'var(--transition-smooth)',
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      keyframes: {
        "accordion-down": {
          from: {
            height: "0",
          },
          to: {
            height: "var(--radix-accordion-content-height)",
          },
        },
        "accordion-up": {
          from: {
            height: "var(--radix-accordion-content-height)",
          },
          to: {
            height: "0",
          },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config;
