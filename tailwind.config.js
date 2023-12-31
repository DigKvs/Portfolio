/** @type {import('tailwindcss').Config} */
export default {
  content: [ "./index.html", "./src/**/*.{js,ts,jsx,tsx}", ],
  theme: {
    extend: {
      fontFamily: {
        playpen: ['Playpen Sans', 'cursive'],
        gothic: ['League Gothic', 'sans-serif'],
        bebas: ['Bebas Neue', 'sans-serif'],
      }
    },
  },
  plugins: [],
}

