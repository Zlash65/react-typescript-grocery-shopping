/** @type {import('tailwindcss').Config} */

module.exports = {
  content: [
    "./src/**/*.{html,js,ts,tsx,css}",
    "./public/**/*.{html,js,ts,tsx,css}"
  ],
  theme: {
    fontFamily: {
      primary: 'Playfair Display',
      body: 'Work Sans',
    },
    container: {
      padding: {
        DEFAULT: '1rem',
        lg: '3rem',
      },
    },
    screens: {
      sm: '640px',
      md: '768px',
      lg: '1024px',
      xl: '1280px',
    },
    extend: {
      colors: {
        primary: '#007BFF',
        secondary: '#28A745',
        tertiary: '#FFC107',
        lightseagreen: {
          DEFAULT: '#20b2aa',
          hover: '#20a09a'
        },
        danger: {
          DEFAULT: '#DC3545',
          hover: '#c43545'
        },
        accent: {
          DEFAULT: '#ac6b34',
          hover: '#925a2b',
        },
        paragraph: '#878e99',
      },
    },
  },
  plugins: [],
};
