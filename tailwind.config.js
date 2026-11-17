/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        emerald: {
          DEFAULT: '#102C24',
          deep: '#091C17',
          dark: '#0C231D',
          surface: '#15392F',
          card: '#1C4A3D',
          border: 'rgba(198, 166, 107, 0.2)',
        },
        forest: {
          DEFAULT: '#193D32',
          deep: '#0E261F',
          light: '#235345',
          muted: 'rgba(25, 61, 50, 0.15)',
        },
        gold: {
          DEFAULT: '#C6A66B',
          500: '#C6A66B',
          hover: '#D4B87F',
          light: '#E2CE9F',
          dark: '#A5864C',
          muted: 'rgba(198, 166, 107, 0.12)',
          border: 'rgba(198, 166, 107, 0.3)',
        },
        ivory: {
          DEFAULT: '#F4F0E6',
          light: '#FCFAF5',
          dark: '#E8E1D3',
          border: 'rgba(16, 44, 36, 0.12)',
        },
        lime: {
          DEFAULT: '#C6F36A',
          500: '#C6F36A',
          hover: '#B5E655',
          muted: 'rgba(198, 243, 106, 0.12)',
        },
      },
      fontFamily: {
        athletic: ['"Barlow Condensed"', '"Oswald"', 'sans-serif'],
        display: ['"Barlow Condensed"', '"Oswald"', 'sans-serif'],
        serif: ['"Barlow Condensed"', '"Oswald"', 'sans-serif'],
        sans: ['"Plus Jakarta Sans"', 'system-ui', 'sans-serif'],
        mono: ['"Space Grotesk"', 'monospace'],
      },
      maxWidth: {
        'site': '1440px',
      },
      letterSpacing: {
        tightest: '-0.04em',
        tighter: '-0.02em',
        luxury: '0.12em',
        widestx: '0.2em',
      }
    },
  },
  plugins: [],
}
