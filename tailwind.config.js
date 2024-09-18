/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        marine: {
          dark: '#001755',
          accent: '#41A3FF'
        },
        cream: {
          50: '#F7F7F5',
          100: '#EDECE7',
          200: '#DFDED6',
          300: '#C1BFB0',
          400: '#A8A38F',
          500: '#968F79',
          600: '#89816D',
          700: '#726A5C',
          800: '#5F584D',
          900: '#4E4940',
          950: '#292621',
        },
      },
      fontSize: {
        '6xl': '135px',
        '5xl': '101px',
        '4xl': '76px',
        '3xl': '57px',
        '2xl': '43px',
        'xl': '32px',
        'lg': '24px',
        'md': '22px',
        'base': '18px',
        'sm': '14px',
      },
    },
  },
  plugins: [],
};
