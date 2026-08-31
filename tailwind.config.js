/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      screens: {
        nav: '887px',
      },
      colors: {
        berkeley: {
          blue: '#00313c',
          darkBlue: '#00232e',
          teal: '#007681',
          tealHover: '#005f68',
          lightTeal: '#77d5dc',
          gray: '#63666a',
          lightGray: '#b1b3b3',
          border: '#e3e8e9',
          text: '#102f38',
          bgSoft: '#f7f9f9',
          bgCollab: '#f0f6f7',
        }
      },
      fontFamily: {
        sans: ['Libre Franklin', 'Arial', 'sans-serif'],
        heading: ['Kanit', 'Libre Franklin', 'sans-serif'],
        mono: ['JetBrains Mono', 'monospace'],
      },
      boxShadow: {
        'berkeley-card': '0 18px 45px rgba(0, 49, 60, 0.1)',
        'berkeley-hover': '0 24px 50px rgba(0, 49, 60, 0.15)',
      }
    },
  },
  plugins: [],
}
