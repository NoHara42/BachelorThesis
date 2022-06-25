const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  content: [
    "./public/**/*.{js,ts,jsx,tsx,html}",
    "./dist/*.{js,ts,jsx,tsx,html}",
  ],
  daisyui: {
    themes: [
      {
        mytheme: {
          primary: "#4ade80",
          secondary: "#FFDEA7",
          accent: "#e879f9",
          neutral: "#3D4451",
          "base-100": "#FFFFFF",
          info: "#3ABFF8",
          success: "#36D399",
          warning: "#FBBD23",
          error: "#F87272",
        },
      },
    ],
  },
  theme: {
    extend: {
      fontFamily: {
        sans: ["Proxima Nova", ...defaultTheme.fontFamily.sans],
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [require("@tailwindcss/typography"), require("daisyui")],
};
