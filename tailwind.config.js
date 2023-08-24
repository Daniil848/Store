/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      transitionProperty: {
        height: 'height'
      },
      keyframes : {
        swing : {
          '0%' : {
            opacity: 1,
            transform: 'rotateX(0deg)',
          },
          '50%' : {
            opacity: 1,
            transform: 'rotateX(-90deg)',
          },
          '100%' : { 
            opacity: 1,
            transform: 'rotateX(0deg)',
          },
        },
        swingIn : {
          '0%' : {
            opacity: 1,
            transform: 'rotateX(-90deg)',
          },
          '100%' : { 
            opacity: 1,
            transform: 'rotateX(0deg)',
          },
        },
        swingOut : {
          '0%' : {
            opacity: 1,
            transform: 'rotateX(0deg)',
          },
          '100%' : { 
            opacity: 1,
            transform: 'rotateX(-90deg)',
          },
        },
      },
      animation : {
        swing : "swing 0.5s ease 0s 1 normal forwards",
        swingIn : "swingIn 0.5s ease 0s 1 normal forwards",
        swingOut : "swingOut 0.5s ease 0s 1 normal forwards",
      },
    },
  },
  plugins: [],
}

