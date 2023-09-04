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
        secondary: '#F1F3F6'
      },
      screens: {
        xs: "450px",
      },
      backgroundImage: {
        'profile-pattern': "url('/src/assets/profile-pattern.jpg')",
      },
      lineClamp: {
        '1': '1',
        '2': '2',
        '3': '3',
      },
    },
  },
  plugins: [],
}
