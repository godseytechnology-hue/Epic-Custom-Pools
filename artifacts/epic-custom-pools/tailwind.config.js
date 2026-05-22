/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,ts,jsx,tsx,mdx}'],
  theme: {
    extend: {
      colors: {
        navy:         '#080e14',
        gold:         '#7ed321',
        'gold-light': '#a8e63a',
        teal:         '#1ab3e8',
        'teal-light': '#5dd0f5',
        slate:        '#4a5568',
        'mid-dark':   '#0f1a24',
        'card-dark':  '#111e2b',
        'border-dark':'#1e3347',
        muted:        '#7a9bb5',
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
