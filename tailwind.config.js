/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: "class",
  theme: {
    container: {
      padding: {
        DEFAULT: '1rem',
        sm: '2rem',
        lg: '4rem',
        xl: '5rem',
        '2xl': '6rem',
      },
    },
    extend: {
      colors: {
        'darkBlue': "hsl(209, 23%, 22%)",
        'veryDark': "hsl(207, 26%, 17%)",
        'veryDarkText': "hsl(200, 15%, 8%)",
        'darkGray': "hsl(0, 0%, 52%)",
        'veryLightGray': "hsl(0, 0%, 98%)"
      }
    },
  },
  plugins: [],
}

