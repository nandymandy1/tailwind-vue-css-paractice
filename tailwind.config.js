module.exports = {
  purge: [],
  theme: {
    extend: {
      colors: {
        primary: '#ff6363',
        secondary: {
          100: '#E2E2D5',
          200: '#888883'
        }
      },
      fontFamily: {
        body: [
          'Nunito'
        ]
      }
    },
  },
  variants: {
    outline: ['focus', 'responsive', 'hover'],
    display: ['responsive', 'hover', 'focus'],
  },
  plugins: [],
}
