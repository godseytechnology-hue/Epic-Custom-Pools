/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,ts,jsx,tsx,mdx}'],
  theme: {
    extend: {
      colors: {
        navy:         '#0d2540',
        gold:         '#7ed321',
        'gold-light': '#a8e63a',
        teal:         '#1ab3e8',
        'teal-light': '#5dd0f5',
        slate:        '#4a5568',
        'mid-dark':   '#122d4a',
        'card-dark':  '#163354',
        'border-dark':'#1e3a52',
        muted:        '#5b8ab0',
      },
      fontFamily: {
        barlow:    ['var(--font-barlow)', 'system-ui', 'sans-serif'],
        playfair:  ['var(--font-barlow)', 'system-ui', 'sans-serif'],
        inter:     ['var(--font-inter)',  'system-ui', 'sans-serif'],
        montserrat:['var(--font-barlow)', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
