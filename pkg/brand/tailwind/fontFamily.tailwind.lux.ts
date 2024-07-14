import type { TwFontDesc } from '@hanzo/ui/tailwind'

import luxTwFonts  from './lux-tw-fonts'

export const fontFamily = (ignoreTheme: any): {
  [key: string]: string[] 
} => {

  let result: any = {}
  luxTwFonts.forEach((font: TwFontDesc) => {
    result[font.twName] = font.fontFamily
    // eg: heading: ['var(--font-druk-text-wide)']
  })

  return result as {
    [key: string]: string[] 
  }
}
