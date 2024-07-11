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
  theme: {
    extend: {
      animation: {
        bottomIn: 'bottom-in 1s ease-in-out',
        fadeIn: 'fade-in 2s ease-in-out',
        rightIn: 'right-in 1s ease-in-out',
        topIn: 'top-in 1s ease-in-out',
        leftIn: 'left-in 1s ease-in-out',
      },
      keyframes: {
        'bottom-in': {
          '0%': {
            transform: 'translateY(50px)',
            opacity: 0
          },
          '100%': {
            transform: 'translateY(0px)',
            opacity: 1
          }
        },
        "fade-in": {
          "0%": {
            opacity: 0
          },
          "100%": {
            opacity: 1
          },
        },
        'right-in': {
          '0%': {
            transform: 'translateX(1000px)',
            opacity: 0
          },
          '100%': {
            transform: 'translateX(0px)',
            opacity: 1
          }
        },
        'top-in': {
          '0%': {
            transform: 'translateY(-50px)',
            opacity: 0
          },
          '100%': {
            transform: 'translateY(0px)',
            opacity: 1
          }
        },
        'left-in': {
          '0%': {
            transform: 'translateX(-50px)',
            opacity: 0
          },
          '100%': {
            transform: 'translateX(0px)',
            opacity: 1
          }
        }
      }
    }
  }
}