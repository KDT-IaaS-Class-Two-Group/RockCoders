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
      },
      height: {
        '600': '600px',
      },
    },
  },
  plugins: [],
};

