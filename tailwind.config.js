// tailwind.config.js
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
    './app/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        'hero-green': '#30583C',
        'primary-green': '#4DD553',
        'secondary-gray': '#1E1E1E',
        'light-green': '#E5FFE6',
      },
    },
  },
  plugins: [],
};
