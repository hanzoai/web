import type { 
  Block,
  ElementBlock, 
  ScreenfulBlock, 
} from '@hanzo/ui/blocks'

import { ApplyTypography } from '@hanzo/ui/primitives'

import CashBackGraphic from './cash-back-graphic'
import MDX_right from './right.mdx'

export default {
  blockType: 'screenful',
  specifiers: 'vert-center',
  columnSpecifiers: ['vert-center mobile-vert-center', 'vert-center mobile-vert-center'],
  contentColumns: [[
    {blockType: 'element',
      element: (<div className={'flex items-center justify-center self-center w-full aspect-square md:aspect-auto overflow-hidden'}>
        <CashBackGraphic className='h-full max-h-[30rem] py-3'/>
      </div>)
    } satisfies ElementBlock as Block
  ] , [
    {blockType: 'element',
      element: (
        <ApplyTypography className='p-3'>
          <MDX_right />
        </ApplyTypography>
      )
    } satisfies ElementBlock as Block
  ]] as Block[][], 
} satisfies ScreenfulBlock as ScreenfulBlock