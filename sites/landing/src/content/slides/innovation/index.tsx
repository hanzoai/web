import type {
  Block,
  ScreenfulBlock,
  ElementBlock,
} from '@hanzo/ui/blocks'
import { ApplyTypography } from '@hanzo/ui/primitives'
import ImageCarousel from '@/components/images-carousel'
import Link from 'next/link'
import GotoBtn from '../details/video/Gotobtn'

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
          <div className='pt-20 h-full w-full flex flex-col'>
            <div className='md:px-4 items-center'>
              <div className='lg:hidden w-full flex'>
                <Link href={"#"} className='font-bold lg:underline justify-items-end no-underline'>
                  Our Story
                </Link>
                <GotoBtn className='lg:hidden ml-4 w-[17px]' />
              </div>
              <p className='2xl:text-[150px] xl:text-[100px] text-[30px] text-left font-medium'>{title}</p>
            </div>
            <ImageCarousel className='pt-11 items-center'/>
          </div>
        )
      } satisfies ElementBlock as Block
    ]
  ]
} satisfies ScreenfulBlock