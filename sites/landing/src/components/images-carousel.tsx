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
import { useEffect, useState } from 'react'

import images from '@/content/images'

const ImageComponent: React.FC<{
  img: ImageDef
  current: number
  index: number
  onSelectImage: () => void
}> = ({
  img,
  current,
  index,
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
            className={cn('mx-auto', current !== index ? 'cursor-pointer' : '', 'rounded-lg')}
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
      <Carousel
        setApi={setApi}
        options={{ align: 'center', loop: true }}
        className={cn('w-full', className)}
      >
        <CarouselContent>
          {images.map((image: ImageDef, index) => (
            <CarouselItem key={index} className={cn('basis-auto')}>
              <ImageComponent img={image} current={current} index={index} onSelectImage={() => selectedImage(index)} />
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>
    )
  }

export default ImageCarousel