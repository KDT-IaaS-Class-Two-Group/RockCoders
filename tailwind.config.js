/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.{js,jsx,ts,tsx}', 
    './public/index.html'
  ],
  theme: {
    extend: {
      width: {
        '443': '443px',
        '398': '398px'
      },
      height: {
        '600': '600px',
        '562': '562px'
      },
    },
  },
  plugins: [],
};

