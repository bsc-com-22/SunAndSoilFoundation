/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: 'rgb(var(--primary) / <alpha-value>)',
          light: 'rgb(var(--primary-light) / <alpha-value>)',
          dark: 'rgb(var(--primary-dark) / <alpha-value>)',
        },
        solar: {
          DEFAULT: 'rgb(var(--solar) / <alpha-value>)',
          light: 'rgb(var(--solar-light) / <alpha-value>)',
          dark: 'rgb(var(--solar-dark) / <alpha-value>)',
        },
        earth: 'rgb(var(--earth) / <alpha-value>)',
        neutral: {
          light: 'rgb(var(--neutral-light) / <alpha-value>)',
        },
      },
      fontSize: {
        'xs': ['clamp(0.7rem, 0.65rem + 0.25vw, 0.75rem)', { lineHeight: '1.5' }],
        'sm': ['clamp(0.8rem, 0.75rem + 0.375vw, 0.875rem)', { lineHeight: '1.5' }],
        'base': ['clamp(0.9375rem, 0.9rem + 0.25vw, 1rem)', { lineHeight: '1.6' }],
        'lg': ['clamp(1rem, 0.95rem + 0.375vw, 1.125rem)', { lineHeight: '1.6' }],
        'xl': ['clamp(1.125rem, 1.05rem + 0.5vw, 1.25rem)', { lineHeight: '1.5' }],
        '2xl': ['clamp(1.25rem, 1.15rem + 0.75vw, 1.5rem)', { lineHeight: '1.4' }],
        '3xl': ['clamp(1.5rem, 1.35rem + 1.125vw, 1.875rem)', { lineHeight: '1.3' }],
        '4xl': ['clamp(1.75rem, 1.5rem + 2vw, 2.25rem)', { lineHeight: '1.2' }],
        '5xl': ['clamp(2rem, 1.75rem + 3vw, 2.75rem)', { lineHeight: '1.1' }],
        '6xl': ['clamp(2.5rem, 2rem + 5vw, 3.5rem)', { lineHeight: '1.1' }],
        '7xl': ['clamp(3rem, 2.5rem + 7vw, 4rem)', { lineHeight: '1' }],
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        heading: ['Montserrat', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
