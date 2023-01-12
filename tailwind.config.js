/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,jsx,ts,tsx}',
    './src/components/**/*.{js,jsx,ts,tsx}',
  ],
  theme: {
    fontFamily: {
      sans: ['Atkinson Hyperlegible'],
      serif: ['Atkinson Hyperlegible'],
    },
    extend: {},
  },
  plugins: [require('tailwind-dracula')('dracula', true)],
};
