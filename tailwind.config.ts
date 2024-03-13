import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        primaryTomato: 'hsl(4, 100%, 67%)',
        neutralDarkSlateGrey: 'hsl(234, 29%, 20%)',
        neutralCharcoalGrey: 'hsl(235, 18%, 26%)',
        neutralGrey: 'hsl(231, 7%, 60%)',
        neutralWhite: 'hsl(0, 0%, 100%)',
      },
    },
  },
  plugins: [],
};
export default config;
