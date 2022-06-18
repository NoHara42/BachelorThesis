const defaultTheme = require('tailwindcss/defaultTheme');

module.exports = {
  content: [
    './public/**/*.{js,ts,jsx,tsx,html}'
  ],
  theme: {
    extend: {
      fontFamily: {
        'sans': ['Proxima Nova', ...defaultTheme.fontFamily.sans],
      }
    }
  },
  variants: {
    extend: {},
  },
  plugins: [require('@tailwindcss/typography')],
};
