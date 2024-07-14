import type {
  Block,
  ScreenfulBlock,
  ElementBlock,
} from '@hanzo/ui/blocks'

import IntroMobile from '@/components/component/intro-mobile'
import type ScrollNumBlock from '@/blocks/def/scroll-num'


export default {
  blockType: 'screenful',
  specifiers: 'vert-center',
  columnSpecifiers: ['vert-center mobile-vert-center'],
  contentColumns: [
    [
      {
        blockType: 'element',
        element: (
          <IntroMobile></IntroMobile>
        )
      } satisfies ElementBlock as Block,
      {
        blockType: 'scroll-num',
        aniNum: ["11", "100", "1B", "120"],
        modifier:["Years","+","+","+"],
        detail: ["Growing Companies", "Companies Scaled", "Client Revenue Generated", "Countries Worldwide"]
      }satisfies ScrollNumBlock as Block
    ]]
} satisfies ScreenfulBlock
