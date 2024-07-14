// import { Inter } from 'next/font/google'
import localFont from 'next/font/local'

import type { TwFontDesc } from '@hanzo/ui/tailwind' // TODO
import type NextFontDesc from './next-font-desc'

import twFonts from '../../tailwind/lux-tw-fonts'

/*
  Creating NextFontDesc's and TwFontDesc's has to be seperated because they are needed
  at different times during the next compile / build.  Otherwise a nasty
  race condition happens!

  Also, requires that "Font loaders must be called and assigned to a const in the module scope"

*/

const drukWide = localFont({
  src: [
    {
      path: './local/Druk-Wide-Bold.ttf',
      weight: '700',
      style: 'normal'
    },
    {
      path: './local/Druk-Wide-Medium.ttf',
      weight: '500',
      style: 'normal',
    },
  ],
  display: 'swap',
  variable: '--font-druk-wide',
})

const inter = localFont({
  src: './local/InterVariable.ttf',
  display: 'swap',
  variable: '--font-inter',
})

export default [
  {
    font: inter,
    twName: 'sans'
  },
  {
    font: inter,
    twName: 'nav'
  },
  {
    font: drukWide,
    twName: 'heading'
  }
].map (
  (el) => {
    const twFont: TwFontDesc | undefined = twFonts.find((twf: TwFontDesc) => (el.twName === twf.twName))
    if (!twFont) {
      throw new Error('lux-next-fonts: Next font is not paired to a TW font!')
    }

    return ({
      ...twFont,
      nextFont: el.font,
    })
  }
) satisfies NextFontDesc[]


