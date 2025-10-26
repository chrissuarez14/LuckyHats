// // tailwind.config.js
// const defaultTheme = require('tailwindcss/defaultTheme');

// /** @type {import('tailwindcss').Config} */
// module.exports = {
//   content: [
//     "./src/**/*.{html,ts}",
//   ],
//   theme: {
//     extend: {
//       // Aquí extendemos las familias de fuentes
//       fontFamily: {
//         // 1. 'sans' (la fuente por defecto) se queda intacta.
//         // 2. Creamos una nueva utilidad 'font-cabinet'
//         //    Usará el nombre que pusimos en @font-face
//         //    ...y le añadimos los respaldos (fallbacks) de sans-serif.
//         cabinet: ['Cabinet Grotesk', ...defaultTheme.fontFamily.sans],
//       },
//     },
//   },
//   plugins: [
//     require('tailwindcss-primeui'),
//   ],
// };
