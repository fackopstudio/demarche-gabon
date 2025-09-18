module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        // Palette principale : vert-dégradé-bleu
        primary: {
          50: "#f0fdf4",   // Vert très clair
          100: "#dcfce7",  // Vert clair
          200: "#bbf7d0",  // Vert moyen clair
          300: "#86efac",  // Vert moyen
          400: "#4ade80",  // Vert
          500: "#22c55e",  // Vert principal
          600: "#16a34a",  // Vert foncé
          700: "#15803d",  // Vert très foncé
          800: "#166534",  // Vert sombre
          900: "#14532d",  // Vert le plus sombre
        },
        // Dégradé vers le bleu
        secondary: {
          50: "#f0f9ff",   // Bleu très clair
          100: "#e0f2fe",  // Bleu clair
          200: "#bae6fd",  // Bleu moyen clair
          300: "#7dd3fc",  // Bleu moyen
          400: "#38bdf8",  // Bleu
          500: "#0ea5e9",  // Bleu principal
          600: "#0284c7",  // Bleu foncé
          700: "#0369a1",  // Bleu très foncé
          800: "#075985",  // Bleu sombre
          900: "#0c4a6e",  // Bleu le plus sombre
        },
        // Couleurs d'accent
        accent: {
          success: "#10b981",
          warning: "#f59e0b",
          error: "#ef4444",
          info: "#3b82f6",
        },
        // Couleurs neutres
        slate: {
          50: "#f8fafc",
          100: "#f1f5f9",
          200: "#e2e8f0",
          300: "#cbd5e1",
          400: "#94a3b8",
          500: "#64748b",
          600: "#475569",
          700: "#334155",
          800: "#1e293b",
          900: "#0f172a",
        }
      },
      fontFamily: {
        sans: ["Inter", "Poppins", "system-ui", "sans-serif"],
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
        'gradient-primary': 'linear-gradient(135deg, #22c55e 0%, #16a34a 50%, #0ea5e9 100%)',
        'gradient-secondary': 'linear-gradient(135deg, #f0fdf4 0%, #e0f2fe 100%)',
        'gradient-text': 'linear-gradient(135deg, #16a34a 0%, #0ea5e9 100%)',
      },
      animation: {
        'fade-in': 'fadeIn 0.6s ease-out',
        'slide-up': 'slideUp 0.6s ease-out',
        'slide-in-left': 'slideInLeft 0.6s ease-out',
        'slide-in-right': 'slideInRight 0.6s ease-out',
        'scale-in': 'scaleIn 0.3s ease-out',
        'float': 'float 3s ease-in-out infinite',
        'pulse-slow': 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        slideUp: {
          '0%': { opacity: '0', transform: 'translateY(30px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        slideInLeft: {
          '0%': { opacity: '0', transform: 'translateX(-30px)' },
          '100%': { opacity: '1', transform: 'translateX(0)' },
        },
        slideInRight: {
          '0%': { opacity: '0', transform: 'translateX(30px)' },
          '100%': { opacity: '1', transform: 'translateX(0)' },
        },
        scaleIn: {
          '0%': { opacity: '0', transform: 'scale(0.9)' },
          '100%': { opacity: '1', transform: 'scale(1)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-10px)' },
        },
      },
      backdropBlur: {
        xs: '2px',
      },
    },
  },
  plugins: [],
}
