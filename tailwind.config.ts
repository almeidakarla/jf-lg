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
          50: '#1a2332',
          100: '#151c28',
          200: '#11171f',
          300: '#0d1117',
          400: '#0a0e12',
          500: '#070a0d',
          600: '#050709',
          700: '#030506',
          800: '#020304',
          900: '#010102',
        },
        accent: {
          50: '#fff9e6',
          100: '#fef0c3',
          200: '#fde59b',
          300: '#fcd872',
          400: '#d4a84a',
          500: '#c9a227',
          600: '#b8922a',
          700: '#9a7a23',
          800: '#7c621c',
          900: '#5e4a15',
        },
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
} satisfies Config;
