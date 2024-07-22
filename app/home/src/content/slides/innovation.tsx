import type {
  Block,
  ScreenfulBlock,
  ElementBlock,
} from '@hanzo/ui/blocks'
import Innovation from '@/components/component/innovation'

const title = 'We believe in Innovation'

export default {
  blockType: 'screenful',
  specifiers: 'vert-center full-screen-width',
  columnSpecifiers: ['bottom'],
  contentColumns: [
    [
      {
        blockType: 'element',
        element: (
          <Innovation></Innovation>
        )
      } satisfies ElementBlock as Block
    ]
  ]
} satisfies ScreenfulBlock