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
import GotoBtn from '../details/svg/Gotobtn'

export default {
  blockType: 'screenful',
  specifiers: 'vert-center full-screen-width',
  columnSpecifiers: ['vert-center mobile-vert-center'],
  contentColumns: [
    [
      {
        blockType: 'element',
        element: (
          <div className='w-full lg:h-[80vh] h-[80vh] lg:align-middle'>
            <div className='lg:pl-13 lg:pt-6 flex'>
              <div className='lg:w-[300px] w-[150px]'>
                <span className='lg:text-xl text-sm font-semibold'>POWERED BY</span>
                <div className='flex  align-middle lg'>
                  <HanzoLogo className='lg:w-[81px] w-[23px]' />
                  <span className='lg:pr-20 lg:ml-5 lg:text-5xl text-base pl-2'>Hanzo</span>
                </div>
              </div>
              <p className='lg:block text-2xl hidden'>Hanzo has powerd over 1000 companies from zero to millions of dollars in revenue per month.</p>
              <p className='lg:hidden text-base italic font-light'>Some of our favorite projects we’ve worked on.</p>
            </div>
            <div className='grid lg:grid-cols-5 border lg:gap-12 grid-cols-2 gap-10 lg:pt-31 pt-20' style={{alignItems: "center",justifyContent:"center"}}>
              <AAAA className='lg:block hidden w-[100%]'  />
              <Arca className='lg:block hidden w-[100%]'/>
              <Beallabeat className='lg:block hidden w-[100%]'/>
              <Casperlabs className='lg:block hidden w-[100%]'/>
              <Cove className='w-[100%]'/>
              <Cover className='w-[100%]'/>
              <Ccliq className='w-[100%]'/>
              <Daemon className='w-[100%]'/>
              <Devxdao className='lg:block hidden w-[100%]'/>
              <Forstman className='lg:block hidden w-[100%]'/>
              <Karma className='w-[100%]'/>
              <Keek className='w-[100%]'/>
              <Lux className='lg:block hidden w-[100%]'/>
              <Myle className='lg:block hidden  w-[70%] md:w-[100%]'/>
              <Nasa className='lg:block hidden w-[100%]'/>
              <Snapchat className='w-[100%]'/>
              <Skully className='w-[100%]' />
              <Triller className='lg:block hidden w-[100%]'/>
              <Unikain className='lg:block hidden w-[100%]'/>
              <Zoo className='lg:block hidden w-[100%]'/>
            </div>
            <div className=' border-t-2 lg:text-2xl mt-14 lg:flex text-base lg:font-semibold w-full'>
            <div className="flex lg:mt-12 lg:pl-13 lg:flex-[80%] lg:flex-row flex-col mt-3">
                <span className=' no-underline lg:text-primary text-muted-1 '>
                  HOW?
                </span>
                <Link href={"#"} className='lg:pl-[250px] no-underline lg:mt-0 mt-4 font-light'>
                  Scaling?
                </Link>
                <Link href={"#"} className='lg:pl-[250px] no-underline font-light'>
                  Securing?
                </Link>
                <Link href={"#"} className='lg:pl-[250px] no-underline font-light'>
                  Simplifying?
                </Link>
              </div>
              <div className='mt-12 w-full lg:flex-[20%] flex'>
                <Link href={"#"} className=' lg:text-muted-1 lg:font-thin font-bold lg:underline justify-items-end no-underline'>
                  Learn More
                </Link>
                <GotoBtn className='lg:hidden ml-4 w-[17px]'/>
              </div>
            </div>
          </div>
        )
      } satisfies ElementBlock as Block
    ]
  ]


} satisfies ScreenfulBlock