/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './App.{js,ts,tsx}',
    './src/**/*.{js,ts,tsx}',   
  ],
  presets: [require('nativewind/preset')],
  theme: {
    extend: {
      colors: {
        /* Primary - Civic Trust Blue */
        primary: 'hsl(221, 83%, 28%)',
        primaryforeground: 'hsl(210, 40%, 98%)',

        /* Secondary - Action Green */
        secondary: 'hsl(160, 84%, 39%)',
        secondaryforeground: 'hsl(210, 40%, 98%)',

        /* Backgrounds */
        background: 'hsl(210, 20%, 98%)',
        foreground: 'hsl(222, 47%, 11%)',

        /* Cards & Surfaces */
        card: 'hsl(0, 0%, 100%)',
        cardforeground: 'hsl(222, 47%, 11%)',
      },
    },
  },
  plugins: [],
};
