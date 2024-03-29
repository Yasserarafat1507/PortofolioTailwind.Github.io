/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./public/**/*.{html,js}"],
  darkMode: 'class',
  theme: {
    container : {
      center : true,
      padding : '16px',
    },
    extend: {
      colors : {
        penting : '#14b8a6',
        dark : '#0f172a',
        text : '#64748b',
      },
      screens : {
        '2xl' : '1320px',
      },
    },
  },
  plugins: [],
}

