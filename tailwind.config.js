/** @type {import('tailwindcss').Config} */
const colors = require("tailwindcss/colors");
const defaultTheme = require("tailwindcss/defaultTheme");
export default {
  content: [
    "./components/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./nuxt.config.{js,ts}",
    "./app.vue",
    './node_modules/preline/preline.js',
  ],
  theme: {
    extend: {
      boxShadow: {
        '3xl': '0 14px 22px -9px rgba(187,203,216,.47)',
        'Warning': '0px 9px 44px 0px rgba(255, 214, 0, 0.19)',
      },
/*       backgroundImage: {
        'hero-pattern': "url('./public/img/BGStars.png')",
      }, */
   zIndex: {
        'auto': 'auto',
        'n2': -2,
        'n1': -1,
      }, 
      colors: {
        'dark-border': "#2A3744",
        'dark-card': "#161D24",
        'dark': "#10151A",
        'primary-color': '#FFD600',
        'custom-color': '#5243C2',
        'color-dark': '#1D1B1B',
        'section-color': "#f2fbfc",
        "gray": {
          "50": "#f9fafb",
          "100": "#f3f4f6",
          "200": "#e5e7eb",
          "300": "#f2fbfc",
          "400": "#9ca3af",
          "500": "#6b7280",
          "600": "#4b5563",
          "700": "#374151",
          "800": "#1f2937",
          "900": "#111827",
          "950": "#030712"
        },
        primary: {
          50: '#eff6ff',
          100: '#dbeafe',
          200: '#bfdbfe',
          300: '#93c5fd',
          400: '#60a5fa',
          500: '#3b82f6',
          600: '#2563eb',
          700: '#1d4ed8',
          800: '#1e40af',
          900: '#1e3a8a',
        },
        secondary: {
          50: '#f8fafc',
          100: '#f1f5f9',
          200: '#e2e8f0',
          300: '#cbd5e1',
          400: '#94a3b8',
          500: '#64748b',
          600: '#475569',
          700: '#334155',
          800: '#1e293b',
          900: '#0f172a',
        },
      },
      fontFamily: {
        ARFont: ['"Almarai"', "sans-serif"],
        ENFont: ['"PT Mono"', "sans-serif"],
/*         body: ['Almarai', 'sans-serif'],
 */      },
    },
  },
  darkMode: "class",
/*   darkMode: ['class', '[data-theme="dark"]'],  */
  plugins: [  
     require('preline/plugin'),
     require("@tailwindcss/typography")
     ],
}

