'use client'

import type { ImageDef } from '@hanzo/ui/types'

import {
  ApplyTypography,
  Carousel,
  CarouselItem,
  CarouselContent,
  type CarouselApi,
} from '@hanzo/ui/primitives'

import { ImageBlockComponent, type ImageBlock } from '@hanzo/ui/blocks'
import type React from 'react'
import { cn } from '@hanzo/ui/util'
import { useEffect, useState, useRef } from 'react'

import images from '@/content/images'

const ImageComponent: React.FC<{
  img: ImageDef
  current: number
  index: number
  className?: string
  onSelectImage: () => void
}> = ({
  img,
  current,
  index,
  className = '',
  onSelectImage
}) => {

    return (
      <ApplyTypography className='flex flex-col !gap-4 items-center h-full'>
        <div className='h-full' onClick={onSelectImage}>
          <ImageBlockComponent
            block={{
              blockType: 'image',
              props: {
                style: {
                  width: '100%',
                  height: '100%',
                  objectFit: 'cover'
                },
              },
              ...img
            } as ImageBlock}
            className={cn('mx-auto', current !== index ? 'cursor-pointer' : '', 'rounded-lg', className)}
          />
        </div>
      </ApplyTypography>
    )
  }

const ImageCarousel: React.FC<{
  className?: string,
}> = ({
  className,
}) => {
    const [api, setApi] = useState<CarouselApi | undefined>()
    const [current, setCurrent] = useState(0)
    const [isIntersecting, setIntersecting] = useState(false)
    const [contentAnim, setContentAnim] = useState('')

    const carouselRef = useRef<HTMLDivElement>(null)

    useEffect(() => {
      const observer = new IntersectionObserver(([entry]) => {
        setIntersecting(entry.isIntersecting)
      })

      if (carouselRef.current) {
        observer.observe(carouselRef.current);
        return () => {
          observer.disconnect();
          setIntersecting(false)
        }
      }
    }, [carouselRef]);

    useEffect(() => {
      if (isIntersecting) {
        setContentAnim('animate-rightIn')
      }
      else {
        setContentAnim('')
      }
    }, [isIntersecting])

    useEffect(() => {
      if (!api) {
        return
      }

      const onSelect = () => {
        setCurrent(api.selectedScrollSnap())
      }

      api.on("select", onSelect)

      return () => {
        api.off("select", onSelect)
      }
    }, [api])

    const selectedImage = (index: number) => {
      if (api) {
        api.scrollTo(index)
      }
    }

    useEffect(() => {
      const handleScroll = () => {
        const target = Math.floor(window.pageYOffset / window.innerHeight)
        if (target !== current) {
          selectedImage(target)
        }
      }
      window.addEventListener("scroll", handleScroll)
      return () => window.removeEventListener("scroll", handleScroll)
    }, [current, selectedImage])

    return (
      <div ref={carouselRef} className={cn('overflow-hidden', contentAnim)}>
        <Carousel
          setApi={setApi}
          options={{ align: 'center', loop: true }}
          className={cn('flex justify-center pt-11 overflow-hidden', className)}
        >
          <CarouselContent>
            {images.map((image: ImageDef, index) => (
              <CarouselItem key={index} className={cn('basis-auto')}>
                <ImageComponent img={image} current={current} index={index} onSelectImage={() => selectedImage(index)} />
              </CarouselItem>
            ))}
          </CarouselContent>
        </Carousel>
      </div>
    )
  }

export default ImageCarousel