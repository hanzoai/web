import React from 'react'

import { Footer } from '@hanzo/brand'
import { cn } from '@hanzo/ui/util'
import { ApplyTypography } from '@hanzo/ui/primitives'

import siteDef from '@/site-def'
import CardsCarousel from './cards-carousel-browse'

const title = 'CHOOSE YOUR CARDS'
const byline = 'Every card is a finely crafted key to spending power, enabling purchases that pay for themselves. Cherish the freedom where spending never costs, only benefits.'

const FooterSlide: React.FC<{
  agent?: string
}> = ({
  agent
}) => (
    <div className='md:flex w-full'>
      <div className={cn(
        'snap-start snap-always h-[100vh] ',
        'swipe flex flex-col justify-between items-stretch pt-20 gap-3 w-full'
      )} >
        <div className='flex flex-col h-full items-center justify-around'>
          <div className='flex '>
            <div className='2xl:px-10 2xl:text-[40px] lg:px-2 lg:text-[24px]'>Hanzo doesn't just iunnovate; we transform our clients into industry leaders through unparalleled technological support.</div>
            <div className='2xl:px-5 2xl:text-[32px] lg:px-1 lg:text-[18px]'>We're dedicated to advancing finance with a focus on impactful, global change. At Hanzo, we see the transformative potential in every business—that's why we're here: to enhance your financial solutions and extend your reach.</div>
          </div>
          <div className='flex border-t-2 justify-around pt-8 mb-19 w-full'>
            <div className='text-[36px] max-w-[324px]'>Work with us</div>
            <div className='text-[16px] max-w-[415px]'>We are excited to understand your organization's unique needs and help you develop a distinctive, effective digital strategy and campaign that stands out.</div>
            <div className='text-[16px] max-w-[173px]'>You can contact us at: info@hanzo.ai</div>
            <div className='text-[24px] max-w-[179px]'>Get in Touch</div>
          </div>
        </div>
        <Footer siteDef={siteDef} className='grow-0 w-full sm:pt-6 border-t-0 flex flex-col justify-between md:justify-start' />
      </div>
    </div>
  )

export default FooterSlide
