/** @type {import('tailwindcss').Config} */
export default {
    content: [
      "./index.html",
      "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
      extend: {
        colors: {
          primary: '#3b82f6',
          secondary: '#6366f1',
          danger: '#ef4444'
        }
      }
    },
    plugins: [],
  };
  module.exports = {
    // other configurations
    plugins: [
      require('@tailwindcss/forms'),
      require('@tailwindcss/typography'),
      // add other plugins if necessary
    ],
  }