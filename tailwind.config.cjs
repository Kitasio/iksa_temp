/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{html,js,svelte,ts}'],
  theme: {
    extend: {
      colors: {
        iksa: {
          50: '#F6F6F6',
          100: '#E7E7E7',
          200: '#C1C7CB',
          400: '#696F74',
          700: '#373B3E',
          800: '#2A2D30',
          900: '#212426'
        },
      },
      fontFamily: {
        'open': ['"Open Sans"', 'sans-serif']
      },
      boxShadow: {
        border: 'inset 0px 0px 0px 2px #000000',
      },
    },
  },
  plugins: [],
}
