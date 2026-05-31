import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#e6eef5',
          100: '#ccdcea',
          200: '#99b9d5',
          300: '#6697c1',
          400: '#3374ac',
          500: '#0a3d62',
          600: '#08314f',
          700: '#06253b',
          800: '#041828',
          900: '#020c14',
        },
        accent: {
          50: '#fff8e6',
          100: '#ffefc2',
          200: '#ffe699',
          300: '#ffdc70',
          400: '#ffd247',
          500: '#f5a623',
          600: '#cc8a1d',
          700: '#a36e17',
          800: '#7a5311',
          900: '#52370b',
        },
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
} satisfies Config;
