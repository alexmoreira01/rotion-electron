/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.tsx', // Arquivos com classes do taildwindcss
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: 'Inter, sans-serif', // Alterando fonte
      }
    },
  },
  plugins: [],
}
