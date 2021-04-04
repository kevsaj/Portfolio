module.exports = {
  purge: ['./src/pages/*.{js,jsx,ts,tsx}', './src/components/*.{js,jsx,ts,tsx}', './public/**/*.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [
    require('@tailwindcss/line-clamp')
  ],
}
