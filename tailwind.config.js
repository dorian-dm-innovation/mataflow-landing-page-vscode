/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ["class"],
  content: [
    "./src/**/*.{html,ts}",   // Angular utilise .html + .ts
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
        sidebar: {
          DEFAULT: "hsl(var(--sidebar-background))",
          foreground: "hsl(var(--sidebar-foreground))",
          primary: "hsl(var(--sidebar-primary))",
          "primary-foreground": "hsl(var(--sidebar-primary-foreground))",
          accent: "hsl(var(--sidebar-accent))",
          "accent-foreground": "hsl(var(--sidebar-accent-foreground))",
          border: "hsl(var(--sidebar-border))",
          ring: "hsl(var(--sidebar-ring))",
        },
        pulse: {
          50: "#E0F2FF",
          100: "#CCE8FF",
          200: "#A6DBFF",
          300: "#66C2FF",
          400: "#1FA8E6",
          500: "#1A73CC",
          600: "#1461B3",
          700: "#0E4A8A",
          800: "#0A3570",
          900: "#0A3570",
          950: "#001528",
        },
        dark: {
          900: "#121212",
          800: "#1e1e1e",
          700: "#2d2d2d",
          600: "#3d3d3d",
        },
        gray: {
          50: '#f9fafb',
          100: '#f3f4f6',
          200: '#e5e7eb',
          300: '#d1d5db',
          400: '#9ca3af',
          500: '#6b7280',
          600: '#4b5563',
          700: '#374151',
          800: '#1f2937', // bg-gray-800
          900: '#111827',
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
        "fade-in": {
          "0%": { opacity: "0", transform: "translateY(10px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        "fade-in-right": {
          "0%": { opacity: "0", transform: "translateX(-20px)" },
          "100%": { opacity: "1", transform: "translateX(0)" },
        },
        "fade-in-left": {
          "0%": { opacity: "0", transform: "translateX(20px)" },
          "100%": { opacity: "1", transform: "translateX(0)" },
        },
        "pulse-slow": {
          "0%, 100%": { opacity: "1" },
          "50%": { opacity: "0.8" },
        },
        float: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-10px)" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
        "fade-in": "fade-in 0.7s ease-out forwards",
        "fade-in-right": "fade-in-right 0.7s ease-out forwards",
        "fade-in-left": "fade-in-left 0.7s ease-out forwards",
        "pulse-slow": "pulse-slow 3s infinite",
        float: "float 6s ease-in-out infinite",
      },
      backgroundImage: {
        "hero-gradient":
          "linear-gradient(90deg, hsla(210, 82%, 52%, 1) 0%, hsla(200, 100%, 60%, 1) 100%)",
        "hero-gradient-2":
          "linear-gradient(90deg, hsla(210, 82%, 52%, 1) 0%, hsla(200, 100%, 60%, 1) 100%)",
        "pulse-gradient":
          "linear-gradient(180deg, rgba(31,133,233,0.8) 0%, rgba(31,133,233,0) 100%)",
      },
      fontFamily: {
        sans: ["Inter", "sans-serif"],
        display: ["Brockmann", "SF Pro Display", "Inter", "sans-serif"],
        brockmann: ["Brockmann", "serif"],
        playfair: ['"Playfair Display"', "serif"],
      },
      boxShadow: {
        elegant: "0 4px 20px rgba(0, 0, 0, 0.08)",
        "elegant-hover": "0 8px 30px rgba(0, 0, 0, 0.12)",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
};
