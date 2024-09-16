import type { Config } from "tailwindcss";
const colors = require('tailwindcss/colors')

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    fontSize: {
      xs: '.75rem',
      sm: '.875rem',
      tiny: '.875rem',
      base: '1rem',
      md: '1.125rem',
      lg: '1.25rem',
      xl: '1.45rem',
      '2xl': '1.5rem',
      '3xl': '1.875rem',
      '4xl': '2.25rem',
      '5xl': '3rem',
      '6xl': '4rem',
      '7xl': '5rem',
    },
    colors: {
      ...colors,
      primary: {
        700: '#03174c',
        100: '#cdd1db',
      },
      secondary: {
        700: '#EF5A5A',
        300: '#FC7D7D',
        100: '#FFDADA',
      },
    },
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
    },
    spacing: {
      none: '0px',
      xs: '8px',
      sm: '16px',
      md: '24px',
      lg: '32px',
      xl: '48px',
      xxl: '64px',
      wrapper: '10vw',
    },
    screens: {
      sm: '640px',
      // => @media (min-width: 640px) { ... }

      md: '768px',
      // => @media (min-width: 768px) { ... }

      lg: '1024px',
      // => @media (min-width: 1024px) { ... }

      xl: '1280px',
      // => @media (min-width: 1280px) { ... }

      '2xl': '1536px',
      // => @media (min-width: 1536px) { ... }
    },
  },
  plugins: [],
};
export default config;
