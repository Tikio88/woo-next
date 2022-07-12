module.exports = {
  // @see https://tailwindcss.com/docs/upcoming-changes
  future: {
    removeDeprecatedGapUtilities: true,
    purgeLayersByDefault: true,
  },
  purge: [
    './src/components/**/*.js',
    './pages/**/*.js'],
  theme: {
    colors:{
      'transparent': 'transparent',
      'current': 'currentColor',
      'white': '#ece6e2',
      'light-brown': '#bdafa6',
      'forest-green': '#808f7c',
      'black': 'black',
      'white': 'white'
    },
    extend: {
      height: {
        'almost-screen': 'calc(-16rem + 100vh)',
        '308px': '19.25rem',
      },
      width: {
        '308px': '19.25rem',
        '600px': '37.5rem',
      },
    },
  },
  variants: {},
  plugins: [
    require( 'tailwindcss' ),
    require( 'precss' ),
    require( 'autoprefixer' )
  ]
}
