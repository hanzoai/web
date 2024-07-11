import type {
  Block,
  ScreenfulBlock,
  ElementBlock,
} from '@hanzo/ui/blocks'

import Impact from '@/components/component/impact';

export default {
  blockType: 'screenful',
  specifiers: 'vert-center full-screen-width',
  columnSpecifiers: ['vert-center mobile-vert-center'],
  contentColumns: [
    [
      {
        blockType: 'element',
        element: (
          <Impact></Impact>
        )
      } satisfies ElementBlock as Block
    ]
  ]
} satisfies ScreenfulBlock