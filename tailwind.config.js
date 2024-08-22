/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './components/**/*.vue',
    './layouts/**/*.vue',
    './pages/**/*.vue',
    './features/**/*.vue',
  ],
  safelist: [
    // {
    //   pattern: /grid-cols-(\d+)/,
    // },
    // {
    //   pattern: /col-span-(\d+)/,
    // },
  ],
  theme: {
    extend: {
      colors: { // override the default colors
        // primary: {
        //   DEFAULT: '#2D8C3C',
        //   900: '#0f5c1f',
        //   800: '#237b31',
        //   700: '#2d8c3b',
        //   600: '#389e46',
        //   500: '#41ad4f',
        //   400: '#41ad4f',
        //   300: '#7bc583',
        //   200: '#a1d5a7',
        //   100: '#c6e5c9',
        //   50: '#e7f5e9',
        // },
        // secondary: {
        //   DEFAULT: '#82BE28',
        //   900: '#1f6600',
        //   800: '#498709',
        //   700: '#5e9b15',
        //   600: '#73ae20',
        //   500: '#82be28',
        //   400: '#95c84d',
        //   300: '#a9d16f',
        //   200: '#c2de99',
        //   100: '#daebc1',
        //   50: '#f0f7e6',
        // },
      },
    },
  },
  plugins: [require('@tailwindcss/typography'), require('daisyui')],
}
