/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.{js,jsx,ts,tsx}', 
    './public/index.html'
  ],
  theme: {
    extend: {
      width: {
        '29.7': '29.7px',
        '443': '443px',
        '398': '398px'
      },
      height: {
        '29.7': '29.7px',
        '600': '600px',
        '562': '562px'
      },
    },
  },
  plugins: [],
};

