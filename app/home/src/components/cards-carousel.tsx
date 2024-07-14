'use client'

import React, { useEffect, useState } from 'react'
import Link from 'next/link'

import { cn } from '@hanzo/ui/util'
import type { ImageDef } from '@hanzo/ui/types'
import { 
  ApplyTypography, 
  Carousel, 
  CarouselContent, 
  CarouselItem, 
  type CarouselApi 
} from '@hanzo/ui/primitives'
import { ImageBlockComponent, type ImageBlock } from '@hanzo/ui/blocks'
import { AddToCartWidget, useCommerce } from '@hanzo/commerce'
import type { LineItem } from '@hanzo/commerce/types'

import cards from '@/content/cards'

type Card = {
  family: string
  title: string
  byline: string
  skuPath: string
  label?: string
  img: ImageDef
}

const CardComponent: React.FC<{
  card: Card
  current: number
  index: number
  onSelectCard: () => void
}> = ({
  card,
  current,
  index,
  onSelectCard
}) => {
  const {family, title, byline, skuPath, img} = card
  
  const cmmc = useCommerce()
  const [lineItem, setLineItem] = useState<LineItem>()

  useEffect(() => {
    cmmc.selectPath(skuPath)
    setLineItem(cmmc.selectedItems.find(item => item.sku === skuPath))
  }, [])

  return (
    <ApplyTypography className='flex flex-col !gap-4 items-center h-full'>
      <div onClick={onSelectCard}>
        <ImageBlockComponent
          block={{blockType: 'image',
            props: {
              style: {
                width: '100%',
                height: 'auto'
              }
            },
            ...img
          } as ImageBlock}
          className={cn(
            'mx-auto aspect-[1.58577251]',
            current !== index ? 'cursor-pointer' : ''
          )}
        />
      </div>
      <Link href={`cards/${family}?sku=${skuPath}`} className='flex flex-col items-center !no-underline'>
        <div className='font-heading text-center text-xs sm:text-lg md:text-sm 2xl:text-base'>{title}</div>
        <p className='text-sm'>{byline}</p>
      </Link>
      {lineItem && <AddToCartWidget item={lineItem} className='mx-auto' buttonClx='h-8'/>}
    </ApplyTypography>
  )
}

const CardsCarousel: React.FC<{
  className?: string
  cardClx?: string
}> = ({
  className,
  cardClx
}) => {
  const [api, setApi] = useState<CarouselApi>()
  const [current, setCurrent] = useState(0)

  const transformedCards = cards.flatMap(card => 
    card.materials.map(material => ({
      family: card.category,
      title: material.titleAlt,
      byline: card.title,
      skuPath: material.sku,
      img: {
        src: material.cardImg.src,
        dim: material.cardImg.dim,
        alt: material.cardImg.alt
      },
    }))
  )

  useEffect(() => {
    if (!api) {
      return
    }

    api.on("select", () => {
      setCurrent(api.selectedScrollSnap())
    })
  }, [api])

  const selectCard = (index: number) => {
    if (api) {
      api.scrollTo(index)
    }
  }

  return (
    <Carousel
      setApi={setApi} 
      options={{ align: 'center', loop: true }}
      className={cn('w-full', className)}
    >
      <CarouselContent>
        {transformedCards.map((card: Card, index) => (
          <CarouselItem key={index} className={cn('basis-3/4 md:basis-1/3 xl:basis-1/5', cardClx)}>
            <CardComponent card={card} current={current} index={index} onSelectCard={() => selectCard(index)}/>
          </CarouselItem>
        ))}
      </CarouselContent>
    </Carousel>
  )
}

export default CardsCarousel