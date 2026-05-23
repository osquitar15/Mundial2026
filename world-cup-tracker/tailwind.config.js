/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "#0F172A", // Slate 900 profundo
        surface: "rgba(30, 41, 59, 0.7)", // Slate 800 con transparencia para glassmorphism
        primary: "#10B981", // Emerald 500 (Césped)
        accent: "#F59E0B", // Amber 500 (Cartas doradas/especiales)
        textMain: "#F8FAFC",
        textMuted: "#94A3B8",
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'hero-glow': 'conic-gradient(from 180deg at 50% 50%, #10B98133 0deg, #3B82F633 180deg, #10B98133 360deg)',
      },
      boxShadow: {
        'glass': '0 4px 30px rgba(0, 0, 0, 0.1)',
        'neon': '0 0 15px rgba(16, 185, 129, 0.5)',
      },
      backdropBlur: {
        'md': '10px',
      }
    },
  },
  plugins: [],
}