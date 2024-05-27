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
        'darkorange': '#F55200',
        'darkblue': '#1F526B',
        'background': '#FAF1E6',
        'mediumbeige': '#F5E6CA'
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
export default config

