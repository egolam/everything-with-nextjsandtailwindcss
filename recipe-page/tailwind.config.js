/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        "primary": "#854632",
        "primary-dark": "#7b284f",
        "rose-dark": "#fff5fa",
        "egg-shell": "#f3e6d8",
        "light-grey": "#e4ded8",
        "wenge-brown": "#5f574e",
        "dark-charcoal": "#302d2c"
      },
    },
  },
  plugins: [],
};
