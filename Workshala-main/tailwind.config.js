/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: 
      {
        backgroundColor: {
          'custom-bg': '#946CC3', 
          'regular-bg': '#946CC3',
          'footer-bg' : '#B5B5B5',
          'service-bg' : '#FFB2CA',
          'custom1-bg' : '#FFE5ED',
          'footer2-bg' : '#251636',
          'custom2-bg' : '#A2E5E3'
        },
        textColor: {
          'custom-text': '#946CC3', 
          'footer-text': '#000000',
          'footer-text2': '#666666',
          'card-text': '#0083E1',
        },
        boxShadow: {
          'custom': '2px 2px 4px 2px rgba(0, 0, 0, 0.2)',
        },
        fontFamily: {
          'worksans': ['Work Sans', 'sans-serif'],
          'WorkSans': ["Work Sans", 'sans-serif'],
        },
        colors: {
          customColor: '#946CC3', 
        },
    },
  },
  plugins: [],
}