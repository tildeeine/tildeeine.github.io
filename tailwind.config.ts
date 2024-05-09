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
        'poppins': ['Poppins']
      },
      colors: {
        'darkorange': '#F55200',
        'darkblue': '#1F526B',
        'background': '#FAF1E6'
      },
    },
  },
  plugins: [],
}
export default config
