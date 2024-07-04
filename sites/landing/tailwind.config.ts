import { preset } from '@hanzo/brand/tailwind'

export default {
  presets: [preset],
  content: {
    files: [
      'src/**/*.tsx',
      'components/**/*.tsx',
      './node_modules/@hanzo/brand/**/*.{ts,tsx}',
      './node_modules/@hanzo/**/*.{ts,tsx}'
    ]
  },
}