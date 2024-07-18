import { preset } from '@hanzo/brand/tailwind'

export default {
  presets: [preset],
  content: {
    files: [
      'src/**/*.tsx',
      './node_modules/@hanzo/brand/**/*.{ts,tsx}',
      './node_modules/@hanzo/**/*.{ts,tsx}'
    ]
  },
  theme: {
    extend: {
      colors: {
        'white': 'rgb(255, 255, 255)',
        'white-85': 'rgba(255, 255, 255, 0.85)',
        'white-65': 'rgba(255, 255, 255, 0.65)',
        'white-10': 'rgba(255, 255, 255, 0.1)'
      }
    }
  }
}      