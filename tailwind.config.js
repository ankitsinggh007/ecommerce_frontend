/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#2874F0',
      },
      screens: {
        xs: "450px",
      },
      backgroundImage:{
        'profile-pattern':"url('/src/assets/profile-pattern.jpg')"
      }
    },
  },
  plugins: [],
}