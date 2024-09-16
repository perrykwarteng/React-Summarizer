/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        satoshi: ['satoshi','sana-sarif'],
        inter: ['inter','sans-sarif'],      }
    },
  },
  plugins: [],
}