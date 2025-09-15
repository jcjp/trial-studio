import type { Config } from 'tailwindcss'
import typography from '@tailwindcss/typography'

const config = {
  content: [
    './components/**/*.{vue,js,ts}',
    './pages/**/*.{vue,js,ts}',
    './content/**/*.{md,yml,json}',
    './**/*.{md,yml,json}',
  ],
  theme: {
    extend: {},
  },
  plugins: [typography],
} satisfies Config

export default config
