module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      background: {
        'huuuman': 'url("/Huuumans.png")',
        
      },
      height: {
        '-2': '-2rem'
      },
      backgroundColor: {
        'white-opacity': 'rgba(255,255,255,0.5)'
      },
      zIndex: {
        '-10': '-10',
       },
       transitionProperty: {
        'height': 'height'
      },
      minWidth: {
        '52': '52rem'
      }
    },
  },
  variants: {
    extend: {
      backgroundColor: ['active'],
      textColor: ['active'],
    },
  },
  plugins: [],
}
