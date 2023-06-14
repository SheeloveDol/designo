/** @type {import('tailwindcss').Config} */


export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    colors: {
      'peach' : 'rgb(231, 129, 107)',
      'lightPeach' : 'rgb(255, 173, 155)',
      'black' : 'rgb(29, 28, 30)',
      'darkGrey' : 'rgb(51, 49, 54)',
      'white' : 'rgb(255, 255, 255)',
      'lightGrey' : 'rgb(241, 243, 245)',
    },

    extend: {},
  },
  plugins: [require("daisyui")],
}

