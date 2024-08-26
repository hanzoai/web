import numeral from 'numeral'

// fix reload issue in nextjs
try {
  numeral.register('locale', 'us', {
    delimiters: {
      thousands: ',',
      decimal: '.',
    },
    abbreviations: {
      thousand: 'K',
      million: 'M',
      billion: 'B',
      trillion: 'T',
    },
    ordinal: (number: number) => (number === 1 ? 'er' : 'ème'),
    currency: {
      symbol: '$',
    },
  })

  // switch between locales
  numeral.locale('us')
} catch (e) {
}

export const HANZO_ENDPOINT = 'https://api.hanzo.ai'
// export const HANZO_ENDPOINT = 'https://api-dot-hanzo-staging-249116.appspot.com'
export const STRIPE_CLIENT_ID = 'ca_53yyRUNpMtTRUgMlVlLAM3vllY1AVybU'
export const STRIPE_REDIRECT_URI = `${HANZO_ENDPOINT}/stripe/callback`
