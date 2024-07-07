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
    <div className='snap-start snap-always h-[100vh] swipe flex flex-col justify-center items-stretch w-full pt-20 gap-3'>
      <div className='hidden md:flex md:flex-col md:px-4 gap-10 justify-around items-center h-full'>
        <div className='flex md:flex-row flex-col gap-8'>
          <div className='2xl:text-4xl xl:text-3xl md:text-2xl text-lg md:font-normal font-medium md:leading-10 leading-7'>Hanzo doesn't just innovate; we transform our clients into industry leaders through unparalleled technological support.</div>
          <div className='2xl:text-2xl md:text-xl text-base font-light md:leading-8 leading-6'>We're dedicated to advancing technology with a focus on impactful, global change. At Hanzo, we see the transformative potential in every business—that's why we're here to enhance your solutions and extend your reach.</div>
        </div>
        <div className='flex flex-col md:flex-row md:justify-around w-full border-t-2 pt-4 md:py-6 gap-4 md:gap-0'>
          <div className='flex-1 2xl:text-4xl xl:text-3xl md:text-2xl text-[32px] font-medium'>Work with us</div>
          <div className='flex-1 text-base font-light leading-5 '>We are excited to understand your organization's unique needs and help you develop a distinctive, effective digital strategy and campaign that stands out.</div>
          <div className='flex-1 text-left flex justify-center'>
            <div className='flex flex-col'>
              <div className='text-base'>You can contact us at: </div>
              <div className='text-base'><Link href={'mailto:info@hanzo.ai'} className='underline text-muted-1 hover:text-primary transition duration-500'>info@hanzo.ai</Link></div>
            </div>
          </div>
          <div className='flex-1 2xl:text-2xl md:text-xl text-base font-bold md:font-normal flex justify-start md:justify-center'>
            <Link href={'mailto:info@hanzo.ai'} className='md:!underline !no-underline text-muted-1 hover:text-primary transition duration-500'>Get in Touch </Link>
            <GotoBtn className='hidden w-[16px] ml-3' />
          </div>
        </div>
      </div>
      <Footer siteDef={siteDef} className='grow-0 w-full pt-6 border-t-2 flex flex-col justify-center md:justify-start px-auto' />
    </div>
  )

export default FooterSlide
