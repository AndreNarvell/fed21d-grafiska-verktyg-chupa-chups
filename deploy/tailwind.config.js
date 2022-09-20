/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        quote: ['Alef'],
        heading: ['Fjalla One'],
        content: ['Inter'],
        form: ['Poppins'],
      },
    },
  },
  plugins: [],
};
