/** @type {import('tailwindcss').Config} */
const plugin = require('tailwindcss/plugin');

module.exports = {
  content: ["./**/*.{html,js}"],
  theme: {
    screens: {
      sm: '641px',
       md: '768px',
      lg: '1025px',
    },
    extend: {
      backgroundImage: {
        "fundo-inicio": "url('/images/bg-fundo.jpeg')",
      },
    },
  },
  plugins: [
    plugin(function ({ addComponents }) {
      addComponents({
        // Foto de perfil
        '.foto-perfil': {
          width: '120px',
          height: '120px',
          borderRadius: '9999px',
          objectFit: 'cover',
          '@screen sm': {
            width: '160px',
            height: '160px',
          },
          '@screen lg': {
            width: '200px',
            height: '200px',
          },
        },

        // Imagem do cardápio
        '.image-cardapio': {
          width: '140px',
          height: '140px',
          borderRadius: '0.375rem', // rounded-md
          objectFit: 'cover',
          transitionDuration: '200ms', // duration-200
          transform: 'scale(1)',
          transitionTimingFunction: 'ease-in-out',
          '&:hover': {
            transform: 'scale(1.10)', // hover:scale-110
          },
          '@screen sm': {
            width: '180px',
            height: '180px',
          },
          '@screen lg': {
            width: '240px',
            height: '240px',
          },
        },
      });
    }),
  ],
};
