/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
 
    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  plugins: [
    require('tailwindcss'),
    require('autoprefixer'),
  ],
  theme: {
    extend: {
      colors: {
        'primary': '#fff',
        'secondary':'#000',
        'three': '#ccc',
        'four': '#1A6ED8'
      }
    },
    // backgroundImage: {
    //   site: "url('./image/bg_iron.jpg')",
    // },
  },
  plugins: [
   
  ],
};