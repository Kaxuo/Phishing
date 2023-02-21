/** @type {import('tailwindcss').Config} */
// eslint-disable-next-line no-undef
module.exports = {
  content: ['./src/**/*.{html,ts}'],
  theme: {
    extend: {}
  },
  // eslint-disable-next-line no-undef
  plugins: [require('@tailwindcss/forms')]
};
