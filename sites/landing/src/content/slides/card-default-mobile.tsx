import { type Block, type CTABlock, type ElementBlock, type EnhHeadingBlock, type ScreenfulBlock, type VideoBlock } from '@hanzo/ui/blocks'
import { DEF_VIDEO_PROPS } from '@luxfi/data'

const byline = "A payment method so simple, so secure and never accrues interest, now that's Lux!"

export default {
  blockType: 'screenful',
  specifiers: 'vert-center no-gutters full-screen-width',
  columnSpecifiers: ['vert-center center mobile-vert-center'],
  contentColumns: [[
    {blockType: 'enh-heading',
      specifiers: 'center',
      heading: {
        text: 'MAKE LUX YOUR DEFAULT CARD',
        level: 3,
      },
    } satisfies EnhHeadingBlock as Block,
    {blockType: 'element',
      element: <h5 className='mx-auto max-w-[45rem] !text-center px-4 text-blue'>{byline}</h5>,
    } satisfies ElementBlock as Block,
    {
      blockType: 'cta',
      elements: [
        {
          title: 'Select Your Card',
          variant: 'primary',
          size: 'sm', 
          href: '/cards'
        },
      ]
    } satisfies CTABlock as Block,
    {
        blockType: 'video', 
        videoProps: DEF_VIDEO_PROPS, 
        sources: ['/assets/content/default-card-vertical.mp4'],
        dim: {
            sm: {w: 300, h: 300},
            md: {w: 600, h: 300},
            lg: {w: 1000, h: 300}
        },
        sizing: {
          vh: 50
        }
    } satisfies VideoBlock as Block,   
  ]],
} as ScreenfulBlock
