/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        brand: {
          primary: '#0B1E3D',
          accent: '#0E7490',
          'accent-light': '#06B6D4',
          surface: '#E0F7FA',
          bg: '#F8FBFF',
          card: '#FFFFFF',
          text: '#0B1E3D',
          'text-secondary': '#4A6080',
          'text-muted': '#8BA5C0',
        }
      }
    }
  },
  plugins: [],
}
