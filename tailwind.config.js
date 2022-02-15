module.exports = {
  purge: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        blue: {
          light: '#4A90E2',
          dark: '#00408B'
        },
        red: '#D0021B',
        yellow: { light: '#FFF2DC', dark: '#F5A623' },
        gray: { light: '#f2f2f2', middleLight: '#C8C8C8', dark: '#757575', delete: '#9B9B9B' },
        primary: { white: '#FFFFFF', black: '#000000', gray: '#E1E1E1' }
      },
      fontFamily: {
        test: ['Roboto']
      }
    }
  },
  variants: {
    extend: {}
  },
  plugins: []
};
