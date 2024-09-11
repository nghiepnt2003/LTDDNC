/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    // Thêm đường dẫn đến các file mà bạn sử dụng class Tailwind
    "./App.{js,jsx,ts,tsx}",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
};
