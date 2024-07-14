import nextFonts from './load-and-return-lux-next-fonts-on-import'
import type NextFontDesc from './next-font-desc'

  // These will be injected for <body> in app router app that uses our RootLayout

  // First is assumed to be mapped to the default font and is injected into <body>
  // as a normal tw font family class.
export default () => (
  nextFonts.map(
      (desc: NextFontDesc) => (desc.nextFont!.variable)
    ).join(' ') + ` font-${nextFonts[0].twName}`
)
