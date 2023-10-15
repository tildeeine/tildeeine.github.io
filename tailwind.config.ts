import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        poppins: ['Poppins', 'sans-serif'],
        Lora: ['Lora', 'serif'],
      },
      colors: {
        darkorange: '#F55200',
        lightorange: '#FB8D22',
        background: '#F5E1D0',
        green: '#004921',
      },
    },
  },
  plugins: [],
}
export default config
