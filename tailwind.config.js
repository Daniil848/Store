/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      keyframes : {
        swing : {
          '0%' : {
            opacity: 1,
            transform: 'rotateX(-90deg)',
          },
          '100%' : { 
            opacity: 1,
            transform: 'rotateX(0deg)',
          },
        },
      },
      animation : {
        swing : "swing 0.5s ease 0s 1 normal forwards"
      }
    },
  },
  plugins: [],
}

