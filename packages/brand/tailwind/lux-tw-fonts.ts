import type { TwFontDesc } from '@hanzo/ui/tailwind'


/* NOTE: /next/load-and-return....ts depends on this file! */

export default [
  {
    fontFamily: ['var(--font-inter)'], // do not provide fall-backs due to next bug
    cssVar: '--font-inter',
    twName: 'sans'
  },
  {
    fontFamily: ['var(--font-druk-text-wide)'], // do not provide fall-backs due to next bug
    cssVar: '--font-druk-text-wide',
    twName: 'nav'
  },
  {
    fontFamily: ['var(--font-druk-wide)'], // do not provide fall-backs due to next bug
    cssVar: '--font-druk-wide',
    twName: 'heading'
  },
  {
    twName: 'serif',
    fontFamily: ['ui-serif', 'Georgia', 'Cambria', '"Times New Roman"', 'Times']
  },
  {
    twName: 'mono',
    fontFamily: [
      'ui-monospace',
      'SFMono-Regular',
      'Menlo',
      'Monaco',
      'Consolas',
      '"Liberation Mono"',
      '"Courier New"',
      'monospace',
    ] 
  }

] as TwFontDesc[]