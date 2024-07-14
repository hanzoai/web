import type {
  Block,
  ScreenfulBlock,
  ElementBlock,
} from '@hanzo/ui/blocks'

import IntroDesktop from '@/components/component/intro-desktop'

export default {
  blockType: 'screenful',
  specifiers: 'vert-center',
  columnSpecifiers: ['vert-center mobile-vert-center'],
  contentColumns: [
    [
      {
        blockType: 'element',
        element: (
          <IntroDesktop></IntroDesktop>
        )
      } satisfies ElementBlock as Block,
    ]]
} satisfies ScreenfulBlock
