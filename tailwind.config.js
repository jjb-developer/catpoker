/** @type {import('tailwindcss').Config} */
const tailwindConfig = {
  //content: ["./src/**/*.{html,js,jsx}"],
  content: ["./index.html", "./main.js", "./src/**/*.{js}"],
  theme: {
    screens: {
      '3xs':'320px',
      '2xs':'400px',
      'xs':'480px',
      'ss':'560px',
      'sm':'640px',
      'md':'768px',
      'lg':'1024px',
      'xl':'1280px',
      '2xl':'1536px'
    }
  },
  plugins: [],
};

module.exports = tailwindConfig;
