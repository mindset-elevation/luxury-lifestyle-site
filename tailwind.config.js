const settings = require('./content/settings.json');

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: settings.theme?.primary || '#0f172a',
        secondary: settings.theme?.secondary || '#8b5cf6',
      },
      fontFamily: {
        custom: [settings.theme?.fontFamily || 'serif', 'sans-serif'],
      },
    },
  },
  plugins: [require('@tailwindcss/typography')],
};
