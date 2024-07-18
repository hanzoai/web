import type ScrollNumBlock from '@/blocks/def/scroll-num'
import type {
  Block,
  ScreenfulBlock,
  ElementBlock,
} from '@hanzo/ui/blocks'
import {ScreenfulBlockComponent} from '@hanzo/ui/blocks'

import VisionTitle from '@/components/component/vision-title'

const screenful = {
  blockType: 'screenful',
  specifiers: 'vert-center full-screen-width no',
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
} as ScreenfulBlock

export default {
  blockType: 'screenful',
  specifiers: 'full-screen-width no-gutters',
  contentColumns: [
    [
      {
        blockType: 'element',
        element:(
          <>
             <ScreenfulBlockComponent block={screenful} clx="" />
          </>
        )
      } as ElementBlock
    ]
  ]
} as ScreenfulBlock