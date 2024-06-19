import type {
  Block,
  ScreenfulBlock,
  ElementBlock,
} from '@hanzo/ui/blocks'
import { ApplyTypography } from '@hanzo/ui/primitives'
import ImageCarousel from '@/components/images-carousel'
import Link from 'next/link'
import GotoBtn from '../details/svg/Gotobtn'

const title = 'We believe in Innovation'

export default {
  blockType: 'screenful',
  specifiers: 'vert-center full-screen-width mobile-vert-center',
  columnSpecifiers: ['bottom mobile-vert-center'],
  contentColumns: [
    [
      {
        blockType: 'element',
        element: (
          <div className='lg:m-auto '>
            <ApplyTypography className='lg:justify-items-start'>
              <div className='lg:hidden w-full flex'>
                <Link href={"#"} className='font-bold lg:underline justify-items-end no-underline'>
                  Our Story
                </Link>
                <GotoBtn className='lg:hidden ml-4 w-[17px]' />
              </div>
              <p className='lg:text-[150px] text-2xl font-medium leading-[181px] drop-shadow-[0_4px_4px_rgba(255, 255, 255, 0.25)]'>{title}</p>
            </ApplyTypography>
            <ImageCarousel className='lg:mt-11'/>
          </div>
        )
      } satisfies ElementBlock as Block
    ]
  ]
} satisfies ScreenfulBlock