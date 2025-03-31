/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx}"],
  theme: {
    extend: {
      animation: {
        'flashy-text': 'flashyText 2s linear infinite',
        'spin-slow': 'spin 30s linear infinite',
      },
      keyframes: {
        flashyText: {
          '0%': { color: '#ffffff' },
          '25%': { color: '#3b82f6' }, // blue-500
          '50%': { color: '#a855f7' }, // purple-500
          '75%': { color: '#ec4899' }, // pink-500
          '100%': { color: '#ffffff' },
        },
      },
      colors: {
        tealCustom: '#0D8B7B',
        grayCustom: '#8290A5'
      },
      fontFamily: {
        sans: ['Urbanist', 'sans-serif'],
      },
    },
    plugins: [require('tailwind-scrollbar-hide')],
  }
}