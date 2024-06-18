import type {
  Block,
  ScreenfulBlock,
  ElementBlock,
} from '@hanzo/ui/blocks'

import HanzoLogo from 'node_modules/@hanzo/brand/components/icons/hanzo-logo'
import { Button } from '@hanzo/ui/primitives'
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
          <div className='flex items-center justify-center w-full mb-21'>
            <HanzoLogo />
          </div>
        )
      } satisfies ElementBlock as Block,
      {
        blockType: 'element',
        element: (
          <div>
            <div className='flex flex-col items-center justify-center w-full'>
              <span className=' text-xl font-normal font-sans'>CUT THROUGH THE COMPLEXITIES</span>
              <span className=' text-2xl mt-12'>We empower businesses to redefine success with pioneering digital solutions - enabling acceleration and growth that expand companies reach.</span>
            </div>
            <div>
              <div className='flex flex-row gap-2 mt-14'>
                <Button variant={'outline'} rounded={'none'} className='w-[145px] h-[36px] text-base'>
                  CASE STUDIES
                </Button>
                <Button variant={'primary'} rounded={'none'} className='w-[145px] h-[36px] text-base'>
                  SCHEDULE CALL
                </Button>
              </div>
            </div>
          </div>
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
