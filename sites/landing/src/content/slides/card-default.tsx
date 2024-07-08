import { 
  type Block, 
  type CTABlock, 
  type ElementBlock, 
  type EnhHeadingBlock, 
  type ScreenfulBlock, 
  type VideoBlock 
} from '@hanzo/ui/blocks'
import { DEF_VIDEO_PROPS } from '@luxfi/data'

const byline = "A payment method so simple, so secure and never accrues interest, now that's Lux!"

export default {
  blockType: 'screenful',
  specifiers: 'vert-center full-screen-width mobile-vert-center',
  columnSpecifiers: ['vert-center center mobile-vert-center'],
  contentColumns: [[
    {blockType: 'enh-heading',
      specifiers: 'center',
      heading: {
        text: 'MAKE LUX YOUR DEFAULT CARD',
        level: 1,
      },
    } satisfies EnhHeadingBlock as Block,
    {blockType: 'element',
      element: <h5 className='mx-auto max-w-[45rem] !text-center px-4'>{byline}</h5>,
    } satisfies ElementBlock as Block,
    {
      blockType: 'cta',
      elements: [
        {
          title: 'Select Your Card',
          variant: 'primary',
          size: 'lg', 
          href: '/cards'
        },
      ]
    } satisfies CTABlock as Block,
    {
        blockType: 'video', 
        videoProps: DEF_VIDEO_PROPS, 
        sources: ['/assets/content/default-card-horizontal.mp4'],
        dim: {
            md: {w: 600, h: 300},
        },
        sizing: {
          vh: 50
        }
    } satisfies VideoBlock as Block
  ]],
} as ScreenfulBlock
