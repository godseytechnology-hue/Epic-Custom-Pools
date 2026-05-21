/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,ts,jsx,tsx,mdx}'],
  theme: {
    extend: {
      colors: {
        navy: '#080e06',
        gold: '#4cd137',
        'gold-light': '#7ed957',
        teal: '#00b4d8',
        'teal-light': '#caf0f8',
        slate: '#4a5568',
      },
      fontFamily: {
        playfair: ['var(--font-montserrat)', 'system-ui', 'sans-serif'],
        inter: ['var(--font-inter)', 'system-ui', 'sans-serif'],
        montserrat: ['var(--font-montserrat)', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
