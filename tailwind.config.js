/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/*.{html,jsx}"],
  theme: {
    extend: {
      backgroundImage: {
        'hero-pattern': "url('/assets/white s logo.png')",
        
      }
    },
  },
  plugins: [],
}

