const colors = require('tailwindcss/colors')
const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  purge: [
    './components/**/*.{vue,js}',
    './layouts/**/*.vue',
    './pages/**/*.vue',
    './plugins/**/*.{js,ts}',
    './nuxt.config.{js,ts}',
  ],
  darkMode: false, // or 'media' or 'class'
  theme: {
    screens: {
      sm: '640px',
      md: '768px',
      lg: '1024px',
      xl: '1080px',
      // xl: '1280px',
    },
    extend: {
      // 'roboto': ['roboto', 'sans-serif'],
      // 'sans': ['roboto', 'sans-serif'],
      // 'sans': ['roboto', ...defaultTheme.fontFamily.sans],
      // 'serif': [...defaultTheme.fontFamily.serif],
      // 'mono': [...defaultTheme.fontFamily.mono]
    },
    colors: {
      gray: colors.coolGray,
      white: {
        DEFAULT: '#FFFFFF',
      },
      black: {
        light: '#101010',
      },
      green: {
        lighter: '#9FCAD0', // protein green
        light: '#65E28C', // green
      },
      red: {
        lighter: '#FD989F',
        light: '#F27171', // red
        DEFAULT: '#F27171',
      },
      blue: {
        bglight: '#F8FAFD',
        light: '#9AD6FF',
        riptide: '#84E4D0',
        DEFAULT: '#407CDE', // blue
      },
      yellow: {
        DEFAULT: '#FFB015', // yellow
        dark: '#FDBF99',
      },
      violet: {
        DEFAULT: '#C4A8FE',
        dark: '#9B99FE',
      },
    },
    borderRadius: {
      none: '0',
      sm: '0.125rem',
      default: '0.25rem',
      md: '0.375rem',
      lg: '0.5rem',
      xl: '0.75rem',
      '2xl': '1rem',
      '3xl': '1.5rem',
      full: '9999px',
      '10': '0.625rem',
      '20': '1.25rem'
    },
    fontSize: {
      xs: '0.75rem',
      sm: '0.875rem',
      base: '1rem',
      lg: '1.125rem',
      xl: '1.25rem',
      '2xl': '1.5rem',
      '2.5xl': '1.75rem', // 28px
      '3xl': '1.875rem',
      '4xl': '2.25rem',
      '5xl': '3rem',
      '6xl': '4rem',
    },
    spacing: {
      px: '1px',
      0: '0',
      1: '0.25rem',
      2: '0.5rem',
      2.5: '0.625rem', // 10px
      3: '0.75rem',
      4: '1rem',
      5: '1.25rem',
      6: '1.5rem',
      8: '2rem',
      10: '2.5rem',
      12: '3rem',
      16: '4rem',
      20: '5rem',
      24: '6rem',
      32: '8rem',
      40: '10rem',
      48: '12rem',
      56: '14rem',
      64: '16rem',
    },
  },
  variants: {},
  plugins: [require('@tailwindcss/forms')],
}
