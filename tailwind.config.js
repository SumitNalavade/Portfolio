/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{html,js,svelte,ts}'],
  theme: {
    extend: {
      colors: {
        primary: '#1DB954',
        secondary: '#000000',
        tertiary: "#121212",
        text: "#b3b3b3"
      },
    },
  },
  plugins: []
};