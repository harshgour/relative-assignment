/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      screens: {
        'max-1280':['max','1280px']
      },
      width: {
        'px-40': '40px'
      },
      height: {
        '280': '280px',
      },
      fontSize: {
        '12': '12px',
        '14': '14px',
        '16': '16px'
      }
    },
  },
  plugins: [],
}
