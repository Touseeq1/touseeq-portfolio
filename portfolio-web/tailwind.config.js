/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      screens: {
        all:'320',
        sm:'640px',
        md:'768px',
        lg:'1024px',
        xl:'1280px',
        xxl:'1536'
      },
      colors: {
        'white': '#FFFFFF',
        'halfWhite': '#F9FAFF',
        'dark': '#333333',
        'halfDark': '#828282',
        'yellow': '#FDC435',
        'darkBorder': '#25282B',
      },
      spacing: {
        '5px': '5px',
      },
      borderRadius: {
        '4xl': '2rem',
      }
    }
  },
  plugins: [],
}

