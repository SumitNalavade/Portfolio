/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        "background": "#fffffe",
        "headline": "#094067",
        "paragraph": "#5f6c7b",
        "button": "#3da9fc",
        "buttonText": "#fffffe",
        "stroke": "#094067",
        "main": "#fffffe",
        "highlight": "#3da9fc",
        "secondary": "#90b4ce",
        "tertiary": "#ef4565"
      },
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
    // ...
  ],
}