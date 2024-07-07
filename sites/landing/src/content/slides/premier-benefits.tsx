import type {
  Block,
  EnhHeadingBlock,
  ImageBlock,
  ScreenfulBlock,
  SpaceBlock,
} from '@hanzo/ui/blocks'
import type ItemCTASBlock from '@/blocks/def/item-ctas'

const byline = `The ultimate credit card for digital nomads, artists, creators, and the sovereign elite. Spend, save, and live your best life without compromise.`

export default {
  blockType: 'screenful',
  mobileOrder: [1, 0], // mobile: card image on top please
  specifiers: 'vert-center narrow-gutters',
  columnSpecifiers: ['bottom mobile-vert-center', 'vert-center mobile-vert-center'],
  contentColumns: [
    [
      {blockType: 'enh-heading',
        heading: {text: 'PREMIER BENEFITS', level: 1, mb: 6},
        byline: {text: byline, level: 6},
      } satisfies EnhHeadingBlock as Block,
      {blockType: 'space', level: 0} satisfies SpaceBlock as Block,
      {blockType: 'item-ctas',
        otherLink: { title: "See Tiers", href: "/cards", variant: 'outline' },
        skuPath: 'LXM-CR-B'
      } satisfies ItemCTASBlock as Block,
    ],
    [
    {blockType: 'image',
      src: '/assets/content/card-packaging-800x472.png',
      alt: 'cards',
      dim: {w: 800, h: 472},
      fullWidthOnMobile: true,
      props: {
        sizes: '100px, 440px',
        style: {
          width: '100%',
          height: 'auto'
        }
      }
    } satisfies ImageBlock as Block,
  ]],
} as ScreenfulBlock
