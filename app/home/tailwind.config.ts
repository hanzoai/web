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
      },
      colors: {
        'white': 'rgb(255, 255, 255)',
        'white-85': 'rgba(255, 255, 255, 0.85)',
        'white-65': 'rgba(255, 255, 255, 0.65)',
        'white-10': 'rgba(255, 255, 255, 0.1)',
        'dark-grey': 'rgb(30, 30, 30)',
        'dark-grey1': 'rgb(161, 161, 161)',
        'white-grey': 'rgb(237, 237, 237)',
        'white-grey-65': 'rgba(237, 237, 237, 0.65)',
        'primary-black': 'rgb(13, 13, 13)',
        'gray-50': 'rgb(249 250 251)',
        'gray-200': 'rgb(229 231 235)',
        'gray-300': 'rgb(209 213 219)',
        'gray-400': 'rgb(156 163 175)',
        'gray-600': 'rgb(75 85 99)',
        'gray-950': 'rgb(3, 7, 18)',
      }
    }
  }
}