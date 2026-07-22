/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          50: '#f0f4ff',
          100: '#e0e9fe',
          200: '#bae0fd',
          300: '#7cc5fb',
          400: '#36a7f7',
          500: '#0c8ae9',
          600: '#026dc7',
          700: '#0357a1',
          800: '#074a83',
          900: '#0c3e6d',
          950: '#082748',
        },
        accent: {
          50: '#fdf2f8',
          100: '#fce7f3',
          200: '#fbcfe8',
          300: '#f7a8d0',
          400: '#f16ea9',
          500: '#e53e85',
          600: '#d01e68',
          700: '#b0124e',
          800: '#921343',
          900: '#7a143b',
        },
        darkBg: '#0b0f19',
        darkCard: 'rgba(17, 24, 39, 0.75)',
        darkBorder: 'rgba(255, 255, 255, 0.1)',
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
      animation: {
        'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'float': 'float 6s ease-in-out infinite',
        'glow': 'glow 2s ease-in-out infinite alternate',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        glow: {
          '0%': { boxShadow: '0 0 15px rgba(12, 138, 233, 0.4)' },
          '100%': { boxShadow: '0 0 30px rgba(12, 138, 233, 0.8)' },
        }
      }
    },
  },
  plugins: [],
}
