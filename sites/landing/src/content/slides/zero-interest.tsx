import type {
  Block,
  EnhHeadingBlock,
  ImageBlock,
  ScreenfulBlock,
  SpaceBlock,
  VideoBlock,
  ElementBlock
} from '@hanzo/ui/blocks'

import { DEF_VIDEO_PROPS } from '@luxfi/data'
import type ItemCTASBlock from '@/blocks/def/item-ctas'
import { LinkElement } from '@hanzo/ui/primitives'

const byline = 'Pay zero interest on all loans. Retain complete sovereignty over your assets, backed by the security and transparency ' +
  'inherent in Lux Quantum Safe Technology.'

const fireworks = {
  blockType: 'video',
  videoProps: DEF_VIDEO_PROPS,
  poster: '/assets/content/fireworks-poster-comp.png',
  sources: [ '/assets/content/fireworks-md.mp4'  ],
  dim: {md: {w: 656, h: 484}, lg: {w: 656, h: 484}},
  sizing: { vh: 25, mobile: {vw: 50} }
} as VideoBlock

export default {
  blockType: 'screenful',
  mobileOrder: [1, 0], // mobile: card image on top please
  specifiers: 'vert-center narrow-gutters',
  columnSpecifiers: ['bottom mobile-vert-center', 'vert-center mobile-vert-center'],
  banner: fireworks,
  contentColumns: [[
    {blockType: 'enh-heading',
      heading: {text: 'ZERO INTEREST', level: 1, mb: 2},
      byline: {text: byline, level: 6},
    } satisfies EnhHeadingBlock as Block,
    {blockType: 'space', level: 0} satisfies SpaceBlock as Block,
    {blockType: 'item-ctas',
      otherLink: { title: "Compare", href: "/compare", variant: 'outline' },
      skuPath: 'LXM-CR-F'
    } satisfies ItemCTASBlock as Block,
  ], [
    {blockType: 'image',
      src: '/assets/commerce/cr/family/cards-2-flat-tit-1593x1231.png',
      alt: 'cards',
      fullWidthOnMobile: true,
      dim: {w: 1593, h: 1231},
      props: {
        sizes: '900px, 440px',
        style: {
          width: '100%',
          height: 'auto'
        }
      }
    } satisfies ImageBlock as Block,
    {blockType: 'element', element: (
      <LinkElement 
        def={{ variant: 'link', href: '/cards/sovereign?sku=LXM-CR-S-RT' }}
        className='w-full text-xs !text-muted-2 hover:!text-foreground italic !text-center !no-underline'
      >
        Sovereign Card
      </LinkElement>
    )} satisfies ElementBlock as Block,
  ]],
} as ScreenfulBlock
