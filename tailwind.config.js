/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        bebasneue: ['var(--font-bebas)'],
        montserrat:['var(--mont)']
      },
      colors:{
        primary:'#A8FF2F',
        sec:'#262626',
        tertiary :'#3F3F3F'
      }
    },
  },
  
  plugins: [],
};
