import type {
  Block,
  ScreenfulBlock,
  ElementBlock,
} from '@hanzo/ui/blocks'
import { ApplyTypography } from '@hanzo/ui/primitives'
import ImageCarousel from '@/components/images-carousel'

const title = 'We belive in innovation'

export default {
  blockType: 'screenful',
  specifiers: 'full-screen-width',
  columnSpecifiers: ['mobile-vert-center'],
  contentColumns: [
    [
      {
        blockType: 'element',
        element: (
          <div className='m-auto'>
            <ApplyTypography className=' justify-item-start'>
              <p className='2xl:text-[150px] lg:text-[48px]'>{title}</p>
            </ApplyTypography>
            <ImageCarousel />
          </div>
        )
      } satisfies ElementBlock as Block
    ]
  ]
} satisfies ScreenfulBlock