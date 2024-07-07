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
import Cycliq from './svg/cycliq'
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
import GotoBtn from '../details/video/Gotobtn'

export default {
  blockType: 'screenful',
  specifiers: 'vert-center full-screen-width',
  columnSpecifiers: ['vert-center mobile-vert-center'],
  contentColumns: [
    [
      {
        blockType: 'element',
        element: (
          <div className='w-full h-full flex flex-col justify-between gap-5 pt-20'>
            <div className='flex flex-row 2xl:gap-20 xl:gap-16 lg:gap-12 gap-10 items-center md:px-6 px-1'>
              <div className='flex flex-col 2xl:gap-6 xl:gap-5 gap-4'>
                <span className='2xl:text-xl xl:text-base text-sm font-semibold whitespace-nowrap'>POWERED BY</span>
                <div className='flex flex-row 2xl:gap-5 xl:gap-4 gap-3'>
                  <HanzoLogo className='2xl:w-[81px] xl:w-[70px] md:w-[60px] w-[23px]' />
                  <span className='2xl:text-5xl xl:text-4xl md:text-3xl text-base'>Hanzo</span>
                </div>
              </div>
              <p className='lg:block hidden text-2xl'>Hanzo has powered over 100 companies from zero to millions of dollars in revenue per month.</p>
              <p className='lg:hidden block text-base'>Some of our favourite projects we've worked on.</p>
            </div>
            <div className='grid md:grid-cols-5 2xl:gap-12 xl:gap-8 grid-cols-2 gap-8 md:px-6 px-1 items-center justify-center'>
              <Arca className='w-[100%]' />
              <Cove className='w-[100%]' />
              <Cover className='w-[100%]' />
              <Lux className='w-[100%]' />
              <Nasa className='w-[100%]' />
              <Zoo className='w-[100%]' />
              <AAAA className='md:block hidden w-[100%]' />
              <Beallabeat className='md:block hidden w-[100%]' />
              <Casperlabs className='md:block hidden w-[100%]' />
              <Devxdao className='md:block hidden w-[100%]' />
              <Cycliq className='md:block hidden w-[100%]' />
              <Daemon className='md:block hidden w-[100%]' />
              <Forstman className='md:block hidden w-[100%]' />
              <Karma className='md:block hidden w-[100%]' />
              <Keek className='md:block hidden w-[100%]' />
              <Myle className='2xl:block hidden md:w-[100%]' />
              <Snapchat className='2xl:block hidden w-[100%]' />
              <Skully className='2xl:block hidden w-[100%]' />
              <Triller className='2xl:block hidden w-[100%]' />
              <Unikain className='2xl:block hidden  w-[100%]' />
            </div>
            <div className='border-t-2 2xl:text-2xl md:text-lg text-base py-4 flex md:flex-row flex-col justify-between md:gap-6 gap-2'>
              <span className='lg:text-primary text-[#525252] lg:px-8 md:px-4 px-2 '>
                HOW?
              </span>
              <div className='flex md:flex-row flex-col justify-between xl:gap-32 md:gap-16 gap-1 px-2'>
                <Link href={"#"} className='!no-underline md:!font-semibold !font-thin'>
                  Scaling?
                </Link>
                <Link href={"#"} className='!no-underline md:!font-semibold !font-thin'>
                  Securing?
                </Link>
                <Link href={"#"} className='!no-underline md:!font-semibold !font-thin'>
                  Simplifying?
                </Link>
              </div>
              <div className='flex flex-row lg:px-8 md:px-4 px-2'>
                <Link href={"#"} className=' md:text-muted-1 md:font-light font-bold md:!underline justify-items-end !no-underline'>
                  Learn More
                </Link>
                <GotoBtn className='md:hidden ml-4 w-[17px]' />
              </div>
            </div>
          </div>
        )
      } satisfies ElementBlock as Block
    ]
  ]


} satisfies ScreenfulBlock
