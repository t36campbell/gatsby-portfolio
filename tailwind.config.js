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
      transitionDuration: {
        0: '0ms',
        600: '600ms',
        900: '900ms',
        1200: '1200ms',
        1500: '1500ms',
        3000: '3000ms',
      },
    },
  },
  plugins: [require('tailwind-dracula')('dracula', true)],
};
