/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        dark: {
          950: '#02060D',
          900: '#030914',
          800: '#0A1220',
          700: '#131F33',
        },
        navy: {
          900: '#040b17',
          800: '#09152b',
        },
        brand: {
          blue: '#1E60FF',
          accent: '#0052FF',
        },
        cardBg: '#F8F9FB',
      },
      fontFamily: {
        sans: ['"Plus Jakarta Sans"', 'Inter', 'sans-serif'],
        display: ['Outfit', 'Syne', 'sans-serif'],
      },
      letterSpacing: {
        tightest: '-0.04em',
        widest: '0.15em',
      }
    },
  },
  plugins: [],
}
