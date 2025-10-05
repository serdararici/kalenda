/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        kalenda: {
          bg: '#F2F2F2',
          primary: '#63BFAE',
          accent: '#F27B35',
          warning: '#F2622E',
          dark: '#400101',
        },
      },
    },
  },
  plugins: [],
}