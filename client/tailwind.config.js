module.exports = {
  purge: ['./src/*.{js,jsx,ts,tsx}', './src/components/**/*.{js,jsx,ts,tsx}', './public/**/*.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {},
  },
  variants: {
    extend: {
      padding: ['hover'],
    },
  },
  plugins: [
    require('@tailwindcss/line-clamp')
  ],
}
