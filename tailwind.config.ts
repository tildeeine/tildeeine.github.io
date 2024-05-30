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
        'secondary': '#1F526B',
        'background': '#FAF1E6',
        'highlighted': '#F5E6CA',
        'selected': '#e0d4c5'
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
export default config

