import type {
  Block,
  ScreenfulBlock,
  ElementBlock,
} from '@hanzo/ui/blocks'
import HanzoLogo from './svg/hanzo'
import AAAA from './svg/AAAA'
import Arca from './svg/arca'
import Beallabeat from './svg/beallabeat'
import Casperlabs from './svg/casperlabs'
import Cove from './svg/cove'
import Cover from './svg/cover'
import Ccliq from './svg/ccliq'
import Daemon from './svg/damon'
import Devxdao from './svg/devxdao'
import Forstman from './svg/forstman'
import Karma from './svg/karma'
import Keek from './svg/keek'
import Lux from './svg/lux'
import Myle from './svg/myle'
import Nasa from './svg/nasa'
import Snapchat from './svg/snapchat'
import Skully from './svg/skully'
import Triller from './svg/triller'
import Unikain from './svg/unikain'
import Zoo from './svg/zoo'
import Link from 'next/link'

export default {
  blockType: 'screenful',
  specifiers: 'vert-center full-screen-width',
  columnSpecifiers: ['vert-center mobile-vert-center'],
  contentColumns: [
    [
      {
        blockType: 'element',
        element: (
          <div className='w-full'>
            <div className=' pl-13 pb-31'>
              <span className=' text-xl'>POWERED BY</span>
              <div className='flex'>
                <HanzoLogo className='w-[80px]' />
                <span className=' pr-20 ml-5 text-5xl'>Hanzo</span>
                <p className=' text-2xl '>Hanzo has powerd over 1000 companies from zero to millions of dollars in revenue per month.</p>
              </div>
            </div>
            <div className='grid lg:grid-cols-5 gap-12 justify-items-center md:grid-cols-3 sm:grid-cols-2 xs:grid-cols-1'>
              <AAAA />
              <Arca />
              <Beallabeat />
              <Casperlabs />
              <Cove />
              <Cover />
              <Ccliq />
              <Daemon />
              <Devxdao />
              <Forstman />
              <Karma />
              <Keek />
              <Lux />
              <Myle />
              <Nasa />
              <Snapchat />
              <Skully />
              <Triller />
              <Unikain />
              <Zoo />
            </div>
            <div className=' border-t-2 text-2xl mt-14 flex'>
              <div className='gird grid-rows-1 mt-12 pl-13 flex-[80%]'>
                <Link href={"#"} className=' no-underline'>
                  HOW?
                </Link>
                <Link href={"#"} className='pl-[250px] no-underline'>
                  Scaling?
                </Link>
                <Link href={"#"} className='pl-[250px] no-underline'>
                  Securing?
                </Link>  
                <Link href={"#"} className='pl-[250px] no-underline'>
                  Simplifying?
                </Link>
              </div>
              <div className='mt-12 w-full flex-[20%]'>
                <Link href={"#"} className=' text-muted-1 underline justify-items-end'>
                  Learn More
                </Link>
              </div>
            </div>
          </div>
        )
      } satisfies ElementBlock as Block
    ]
  ]


} satisfies ScreenfulBlock