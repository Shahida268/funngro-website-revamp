/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        brand: {
          50: '#f0fdf4',
          100: '#dcfce7',
          200: '#bbf7d0',
          300: '#86efac',
          400: '#4ade80',
          500: '#22c55e',
          600: '#16a34a',
          700: '#15803d',
          800: '#166534',
          900: '#14532d',
        },
        ink: {
          900: '#0b1f33',
          800: '#13243a',
          700: '#1f2f47',
          500: '#3d4f66',
          400: '#5b6b80',
          300: '#8a99ac',
        },
      },
      fontFamily: {
        sans: ['Inter', 'ui-sans-serif', 'system-ui', 'Arial', 'sans-serif'],
      },
      boxShadow: {
        soft: '0 10px 30px -12px rgba(16, 122, 74, 0.18)',
        card: '0 18px 50px -20px rgba(11, 31, 51, 0.25)',
      },
      borderRadius: {
        '2xl': '1rem',
        '3xl': '1.5rem',
      },
      keyframes: {
        floaty: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        fadeUp: {
          '0%': { opacity: '0', transform: 'translateY(16px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
      },
      animation: {
        floaty: 'floaty 6s ease-in-out infinite',
        fadeUp: 'fadeUp 0.6s ease-out both',
      },
    },
  },
  plugins: [],
};
