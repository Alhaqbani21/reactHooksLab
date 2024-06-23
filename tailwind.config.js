/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {},
  },
  plugins: [require('daisyui')],
  daisyui: {
    themes: [
      {
        mytheme: {
          primary: '#8d00ff',

          secondary: '#009300',

          accent: '#2200ff',

          neutral: '#292929',

          'base-100': '#edffff',

          info: '#00a4f9',

          success: '#00ee7f',

          warning: '#ff9a00',

          error: '#ff364e',
        },
      },
    ],
  },
};
