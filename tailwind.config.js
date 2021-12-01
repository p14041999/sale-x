module.exports = {
  mode: 'jit',
  purge: [
    './src/pages/**/*.{js,ts,jsx,tsx}',
    './src/components/**/*.{js,ts,jsx,tsx}',
  ],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      fontFamily: {
        metro: ['Metropolis', 'serif'],
        mont: ['Montserrat', 'sans-serif'],
      },

      colors: {
        custom: {
          primaryColor: '#000248',
          accentColor: '#375bd2',
          navLinkColor: '#ffffffb2',
          activeNavBgColor: '#f6f7fc',
          activeNavLinkColor: '#000248',
        },
      },
    },
    screens: {
      sm: '640px',

      md: '768px',

      ml: '960px',

      lg: '1024px',

      xl: '1280px',

      '2xl': '1536px',
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
