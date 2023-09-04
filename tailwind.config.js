/** @type {import('tailwindcss').Config} */
module.exports = {
  important: true,
  content: [
    './src/pages/**/*.{js,jsx,ts,tsx}',
    './src/components/**/*.{js,jsx,ts,tsx}',
  ],
  theme: {
    fontFamily: {
      sans: ['Atkinson Hyperlegible'],
      serif: ['Atkinson Hyperlegible'],
    },
    listStyleType: {
      none: 'none',
      disc: 'disc',
      decimal: 'decimal',
      square: 'square',
      roman: 'upper-roman',
    },
    extend: {
      colors: {
        'custom-darkest': '#14151b',
        'custom-darker': '#1e2029',
      },
      transitionDuration: {
        0: '0ms',
        600: '600ms',
        900: '900ms',
        1200: '1200ms',
        1500: '1500ms',
        3000: '3000ms',
      },
      width: {
        xl: '150%',
        '2xl': '200%',
        '3xl': '300%',
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
