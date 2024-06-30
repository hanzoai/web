import React from 'react'

import { Footer } from '@hanzo/brand'
import { cn } from '@hanzo/ui/util'
import { ApplyTypography } from '@hanzo/ui/primitives'

import siteDef from '@/site-def'
import CardsCarousel from './cards-carousel-browse'
import GotoBtn from '@/content/slides/details/svg/Gotobtn'
import Link from 'next/link'

const title = 'CHOOSE YOUR CARDS'
const byline = 'Every card is a finely crafted key to spending power, enabling purchases that pay for themselves. Cherish the freedom where spending never costs, only benefits.'

const FooterSlide: React.FC<{
  agent?: string
}> = ({
  agent
}) => (
    <div className='w-full'>
      <div className={cn(
        'snap-start snap-always h-[100vh] ',
        'swipe flex flex-col justify-between items-stretch pt-20 gap-3 w-full'
      )} >
        <div className='lg:flex lg:flex-col lg:h-full lg:items-center lg:justify-around px-4 hidden'>
          <div className='flex border'>
            <div className='px-10 text-[40px] font-normal leading-10 text-2xl '>Hanzo doesn't just innovate; we transform our clients into industry leaders through unparalleled technological support.</div>
            <div className='px-5 text-[32px] font-light text-xl leading-8'>We're dedicated to advancing finance with a focus on impactful, global change. At Hanzo, we see the transformative potential in every business—that's why we're here: to enhance your financial solutions and extend your reach.</div>
          </div>
          <div className='flex border-t-2 justify-around pt-8 mb-19 w-full border mt-[10px] mt-[30px]'>
            <div className='text-[36px] max-w-[324px] font-medium '>Work with us</div>
            <div className='text-base max-w-[415px] leading-5 '>We are excited to understand your organization's unique needs and help you develop a distinctive, effective digital strategy and campaign that stands out.</div>
            <div>
              <div className='text-[16px] max-w-[173px] mt-0'>You can contact us at: </div>
              <div className='text-[16px] max-w-[173px] mt-0'><Link href={'mailto:info@hanzo.ai'} className=' underline'>info@hanzo.ai</Link></div>
            </div>

            <div className='text-[24px] text-base font-bold max-w-[179px] flex mt-0'>
              <Link href={'mailto:info@hanzo.ai'} className=' underline'>Get in Touch </Link>
              <GotoBtn className='hidden w-[16px] ml-3' />
            </div>
          </div>
        </div>
        <Footer siteDef={siteDef} className='grow-0 w-full sm:pt-6 border-t-0 flex flex-col justify-between md:justify-start px-auto' />
      </div>
    </div>
  )

export default FooterSlide
