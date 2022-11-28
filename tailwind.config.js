/** @type {import('tailwindcss').Config} */
module.exports = {
  jit: true,
  darkMode: 'class',
  content: [
    './src/**/*.{html,js}',
    './index.html',
  ],
  theme: {
    extend: {
      colors: {
        'cloud': '#f8fafc',
        'night': {
          '400': '#38bdf8',
          '500': '#1e293b',
          '600': '#182c43',
          '700': '#293548',
          '800': '#1e293b',
          '900': '#0f172a',
        }

      },
      spacing: {
        '128': '30rem',
        '21': '4rem'
      }
    },
  },
  plugins: [],
}
