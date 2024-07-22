import type ScrollNumBlock from '@/blocks/def/scroll-num'
import type {
  Block,
  ScreenfulBlock,
  ElementBlock,
} from '@hanzo/ui/blocks'

import VisionTitle from '@/components/component/vision-title'

export default {
  blockType: 'screenful',
  specifiers: 'vert-center full-screen-width',
  columnSpecifiers: ['vert-center mobile-vert-center'],
  contentColumns: [
    [
      {
        blockType: 'element',
        element: (
          <VisionTitle></VisionTitle>
        )
      } satisfies ElementBlock as Block,
      {
        blockType: 'scroll-num',
        aniNum: ["11", "100", "1B", "120"],
        modifier: ["Years", "+", "+", "+"],
        detail: ["Growing Companies", "Companies Scaled", "Client Revenue Generated", "Countries Worldwide"]
      } satisfies ScrollNumBlock as Block
    ]
  ]
} satisfies ScreenfulBlock