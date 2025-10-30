/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        newlywed: {
          light: '#ffc6ff',
          DEFAULT: '#e7c6ff',
          dark: '#c8b6ff',
        },
        infant: {
          light: '#bfdbfe',
          DEFAULT: '#93c5fd',
          dark: '#60a5fa',
        },
        teenager: {
          light: '#5eead4',
          DEFAULT: '#2dd4bf',
          dark: '#14b8a6',
        },
        multigen: {
          light: '#fed7aa',
          DEFAULT: '#fdba74',
          dark: '#fb923c',
        },
      },
      fontFamily: {
        sans: ['Pretendard', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
