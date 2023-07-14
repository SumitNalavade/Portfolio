/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{html,js,svelte,ts}"],
  theme: {
    extend: {
      colors: {
        primary: "#1DB954",
        secondary: "#282828",
        neutral: "#121212",
        text: "#b3b3b3"
      },
    },
  },
  plugins: [require('@tailwindcss/typography'), require("daisyui")],
  daisyui: {
    themes: [
      {
        mytheme: {
          primary: "#1DB954",
          secondary: "#282828",
          neutral: "#121212"
        },
      },
    ],
  },
};
