import type {
  Block,
  ScreenfulBlock,
  ElementBlock,
} from '@hanzo/ui/blocks'

import HanzoLogo from 'node_modules/@hanzo/brand/components/icons/hanzo-logo'
import { Button } from '@hanzo/ui/primitives'


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
        element :(
          <div className='flex flex-col items-center justify-center w-full'>
            <span className='text-[100px] md:text-[180px] font-bold font-sans hidden md:block'>Hanzo</span>
            <span className=' text-2xl md:text-5xl text-center font-normal font-sans'>CUT THROUGH THE COMPLEXITIES</span>
            <div className='flex flex-col sm:flex-row mt-21 gap-10 md:gap-16'>
              <Button variant={'outline'} rounded={'none'} className='w-50 md:w-90 h-15 md:h-20 text-base md:text-2xl'>
                BROWSE CASE STUDIES
              </Button>
              <Button variant={'primary'} rounded={'none'} className='w-50 md:w-90 h-15 md:h-20 text-base md:text-2xl'>
                SCHEDULE CALL
              </Button>
            </div>
          </div>
        )
      }satisfies ElementBlock as Block,
    ]]
} satisfies ScreenfulBlock
