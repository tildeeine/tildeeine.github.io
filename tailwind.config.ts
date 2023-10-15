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
        'fontA': ['FontA', 'system-ui'],
        'fontB': ['FontB', 'system-ui'],
      },
      colors: {
        primary: '#FF5733',
        secondary: '#3333FF',
      },
    },
  },
  plugins: [],
}
export default config
