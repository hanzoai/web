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
  contentColumns:[
    [
      {
        blockType: 'element',
        element:(
          <div className='w-full px-9'>
            <p className='text-muted-1 mb-10'>OUR VISION</p>
            <span className='2xl:text-5xl lg:text-2xl'>We <b>empower businesses</b> to transcend traditional boundaries and redefine success with pioneering digital solutions - enabling acceleration and growth that expand companies reach by providing a suite of digital tools that simplify coplex challenges when launching, scaling, and innovating.</span>
          </div>
        )
      }satisfies ElementBlock as Block,
      {
        blockType: 'scroll-num',
        aniNum: ["11", "100", "1B", "120"],
        modifier:["Years","+","+","+"],
        detail: ["Growing Companies", "Companies Scaled", "Client Revenue Generated", "Countries Worldwide"]       
      }satisfies ScrollNumBlock as Block
    ]
  ]
} satisfies ScreenfulBlock