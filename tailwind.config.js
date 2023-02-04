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
    extend: {
      colors: {
        'custom-darkest': '#14151b',
        'custom-darker': '#1e2029',
      },
      zIndex: {
        100: '100',
        1000: '1000',
        10000: '10000',
        100000: '100000',
      },
    },
  },
  plugins: [require('tailwind-dracula')('dracula', true)],
};
