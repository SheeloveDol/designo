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

    extend: {
      backgroundImage: {
        'smallCircle': 'url("/src/assets/shared/desktop/bg-pattern-small-circle.svg ")',

        'aboutHeroMobile': 'url("/src/assets/about/mobile/image-about-hero.jpg")',
        'aboutHeroTablet': 'url("/src/assets/about/tablet/image-about-hero.jpg")',
        'aboutHeroDesktop': 'url("/src/assets/about/desktop/image-about-hero.jpg")',

        'aboutRealDealMobile': 'url("/src/assets/about/mobile/image-real-deal.jpg")',
        'aboutRealDealTablet': 'url("/src/assets/about/tablet/image-real-deal.jpg")',
        'aboutRealDealDesktop': 'url("/src/assets/about/desktop/image-real-deal.jpg")',

        'aboutWorldClassMobile': 'url("/src/assets/about/mobile/image-world-class-talent.jpg")',
        'aboutWorldClassTablet': 'url("/src/assets/about/tablet/image-world-class-talent.jpg")',
        'aboutWorldClassDesktop': 'url("/src/assets/about/desktop/image-world-class-talent.jpg")',

      } 
    },
  },
  // eslint-disable-next-line no-undef
  plugins: [require("daisyui")],
}

