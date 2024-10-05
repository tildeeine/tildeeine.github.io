import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      screens: {
        'xs': '480px',
        'sm': '640px',
        'md': '768px',
        'lg': '1024px',
        'xl': '1280px',
        '2xl': '1536px',
      },
      fontFamily: {
        'poppins': ['Poppins']
      },
      colors: {
        'primary': '#F55200',
        'primary-dark': '#E65005',
        'secondary': '#1F526B',
        'secondary-light': '#53758a',
        'background': '#FAF1E6',
        'highlighted': '#F5E6CA',
        'selected': '#F6EBDD'
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
export default config

