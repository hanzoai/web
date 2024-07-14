'use client'
import React, { useRef, useState } from 'react'
import Link from 'next/link'

import { ImageBlockComponent } from '@hanzo/ui/blocks'
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  type CarouselApi
} from '@hanzo/ui/primitives'
import { cn } from '@hanzo/ui/util'

import { EmblaAutoplay } from '@hanzo/brand'

import type { Review } from '@/types'

const ReviewComponent: React.FC<{
  review: Review
}> = ({
  review,
}) => {
  const {author, image, text, title, href} = review

  return (
    <div className='flex flex-col gap-2 sm:gap-3'>
      <div className='flex gap-8 items-center'>
        <ImageBlockComponent block={{blockType: 'image', ...image}} className='w-20 h-20 rounded-full mx-0'/>
        {href ? (
          <Link href={href} target='_blank' className='!no-underline'>
            <h5>{title}</h5>
          </Link>
        ) : (
          <h5>{title}</h5>
        )}
      </div>
      <p className='text-sm sm:text-base'>“{text}“</p>
      <p>-{author}</p>
    </div>
  )
}

const ReviewsCarousel: React.FC<{
  reviews: Review[]
  autostart?: boolean
}> = ({
  reviews,
  autostart
}) => {

  const [currentIndex, setCurrent] = useState<number>(0)

  const apiRef = useRef<CarouselApi | undefined>(undefined)

  const setApi = (api: CarouselApi) => { apiRef.current = api}
  const onSelect = (api: CarouselApi) => { setCurrent(api.selectedScrollSnap()) }
  const scrollToCard = (index: number) => { apiRef.current?.scrollTo(index) }

  return (
    <div className='w-full flex flex-col gap-6 sm:gap-10 items-center overflow-hidden'>
      <Carousel
        setApi={setApi}
          // safe to pass in this way, since Shadcn and Embla do that.
        plugins={autostart ? [EmblaAutoplay({ delay: 5000, stopOnInteraction: true })] : []}
        options={{ align: 'start', loop: true }}
        className='w-full mx-auto max-w-[40rem]'
        onCarouselSelect={onSelect}
      >
        <CarouselContent>
          {reviews.map((review: Review, index) => (
            <CarouselItem key={index}>
              <ReviewComponent review={review} />
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>
      <div className='flex gap-2 justify-center'>
        {reviews.map((_, index) => (
          <div
            key={index}
            className={cn(
              'w-3 h-3 rounded-full border border-foreground cursor-pointer', 
              currentIndex === index ? 'bg-foreground' : ''
            )}
            onClick={() => scrollToCard(index)}
          />
        ))}
      </div>
    </div>
  )
}

export default ReviewsCarousel
