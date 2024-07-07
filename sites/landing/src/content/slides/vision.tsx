import type ScrollNumBlock from '@/blocks/def/scroll-num'
import type {
  Block,
  ScreenfulBlock,
  ElementBlock,
} from '@hanzo/ui/blocks'



export default {
  blockType: 'screenful',
  specifiers: 'vert-center full-screen-width',
  columnSpecifiers: ['vert-center mobile-vert-center'],
  contentColumns: [
    [
      {
        blockType: 'element',
        element: (
          <div className='w-full px-9 2xl:mb-30 xl:mb-20 mb-10 mt-20'>
            <p className='text-muted-1 !mb-10 2xl:text-[20px] xl:text-base text-sm font-normal'>OUR VISION</p>
            <span className='2xl:text-[52px] lg:text-4xl text-2xl 2xl:leading-[64px] font-light'>
              We <b className='font-bold '>empower businesses</b> to transcend traditional boundaries and redefine success with pioneering digital solutions - enabling acceleration and growth that expand companies reach by providing a suite of digital tools that simplify complex challenges when launching, scaling, and innovating.
            </span>
          </div>
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