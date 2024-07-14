'use client'

import { useState } from 'react'

import { cn } from '@hanzo/ui/util'
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
  ApplyTypography,
} from '@hanzo/ui/primitives'
import { ImageBlockComponent } from '@hanzo/ui/blocks'
import type { ImageDef } from '@hanzo/ui/types'

import type { Card } from '@luxfi/data/commerce/types'

const BenefitCard: React.FC<{
  key: string | number
  img: ImageDef
  title: string
  description: string
  style?: 'default' | 'accordion'
}> = ({
  key,
  img,
  title,
  description,
  style
}) => {
  const [open, setOpen] = useState<boolean>(false)

  return (
    <div key={key} className='flex flex-col items-center border rounded-lg overflow-hidden'>
      <div
        className={cn('w-full', style === 'accordion' ? 'cursor-pointer' : '')}
        onClick={() => setOpen(!open)}
      >
        <ImageBlockComponent
          block={{blockType: 'image', ...img}}
          className='w-full h-auto max-w-full border-b'
        />
      </div>
      {style === 'accordion' ? (
        <Accordion type='single' collapsible className='w-full' value={open ? title : ''}>
          <AccordionItem value={title} className='border-none'>
            <AccordionTrigger
              showChevron
              className='!no-underline px-3 h-14'
              onClick={() => setOpen(!open)}
            >
              <h5 className='text-lg text-left'>{title}</h5>
            </AccordionTrigger>
            <AccordionContent className='px-3 pb-3'>{description}</AccordionContent>
          </AccordionItem>
        </Accordion>
      ) : (
        <div className='flex flex-col gap-2 p-4'>
          <h5>{title}</h5>
          <p>{description}</p>
        </div>
      )}
    </div>
  )
}

const Benefits: React.FC<{
  card: Card
  limit?: number
  cardStyle?: 'default' | 'accordion'
  showByline?: boolean
  clx?: string
}> = ({
  card,
  limit,
  cardStyle,
  showByline,
  clx
}) => {
  const [showMore, setShowMore] = useState<boolean>(false)

  return (
    <div className={cn('grid grid-cols-1 sm:grid-cols-2 gap-6 items-center', clx)}>
      <ApplyTypography className='flex flex-col items-center sm:col-span-2 gap-2 text-center'>
        <h3 className='!text-lg sm:!text-2xl'>Unique Sovereign Card Benefits</h3>
        {showByline && (
          <p className='!text-sm sm:!text-lg'>An all access pass to elevated living and memorable moments.</p>
        )}
      </ApplyTypography>
      {card.cardDetails.benefits.map(({img, title, description}, index) => (
        (!limit || index < limit || showMore) && (
          <BenefitCard key={index} img={img} title={title} description={description} style={cardStyle}/>
        )
      ))}
      {!!limit && !showMore && (
        <span className='text-center underline cursor-pointer' onClick={() => setShowMore(true)}>View More</span>
      )}
    </div>
  )
}

export {
  Benefits as default
}