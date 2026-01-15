/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./App.{js,ts,tsx}",
    "./src/**/*.{js,ts,tsx}",
  ],

  presets: [require('nativewind/preset')],
  theme: {
    extend: {
      colors:{
        background:{
          bgcolor:"hsl(210 20% 98%)",
          bgforeground:"hsl(222 47% 11%)",
        },
        brand:{
          primary:" hsl(221 83% 28%)",        
          primaryforeground:"hsl(210 40% 98%)",

        },
        card:{
          bgcard:"hsl( 0 0% 100%)",
          cardforeground:"hsl(222 47% 11%)",
        }
      }
    },
  },
  plugins: [],
};
