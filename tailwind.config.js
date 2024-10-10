/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        'SNUTT-orange': '#F58D3D',
        'Text-onBG': '#FFFFFF',
        'Text-Plain': '#505050',
        'Text-Normal': '#000000',
        'Text-Assistive': '#C4C4C4',
      },
      fontFamily: {
        SFPro: ['SFPro'],
      },
    },
  },
  plugins: [],
};
