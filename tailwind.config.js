const colors = require('tailwindcss/colors');

module.exports = {
  // mode: 'jit',
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    colors: {
      transparent: 'transparent',
      current: 'currentColor',

      black: '#000',
      white: '#fff',

      gray: colors.coolGray,
      purple: colors.purple,
      yellow: colors.yellow,
      pink: colors.pink,
      green: colors.green,
      indigo: colors.indigo,
      orange: colors.orange,
      red: colors.red,
      blue: colors.blue,
      rose: colors.rose,
      'light-blue': colors.lightBlue,
    },
  },
  variants: {
    extend: {},
  },
  plugins: [
    require('@tailwindcss/typography'),
    require('@tailwindcss/forms'),
    require('@tailwindcss/aspect-ratio'),
  ],
}