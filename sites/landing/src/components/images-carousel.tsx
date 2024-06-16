'use client'

import type { ImageDef } from '@hanzo/ui/types'

import {
  ApplyTypography,
  Carousel,
  CarouselItem,
  CarouselContent,
  type CarouselApi
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

  const roundedClass = img.rounded ? `rounded-${img.rounded}` : '';
    return (
      <ApplyTypography>
        <div onClick={onSelectImage}>
          <ImageBlockComponent
            block={{
              blockType: 'image',
              props: {
                style: {
                  width: 'auto',
                  // height: '576px',
                  objectFit: 'cover'
                },
              },
              ...img
            } as ImageBlock}
            className={cn('mx-auto ', current !== index ? 'cursor-pointer' : '', roundedClass, 'lg:h-[240px] 2xl:h-[576px]')}
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
    const [api, setApi] = useState<CarouselApi>()
    const [current, setCurrent] = useState(0)

    useEffect(() => {
      if (!api) {
        return
      }

      api.on("select", () => {
        setCurrent(api.selectedScrollSnap())
      })
    }, [api])

    const selectedImage = (index: number) => {
      if (api) {
        api.scrollTo(index)
      }
    }

    return (
      <Carousel
        setApi={setApi}
        options={{ align: 'center', loop: true }}
        className={cn('w-full', className)}>
        <CarouselContent>
          {images.map((image: ImageDef, index) => {
            const basisClass = index === 0 || index === images.length - 1
              ? 'basis-1/4'
              : index === 1
                ? 'basis-2/4'
                : 'basis-1/3 md:basis-1/3 xl:basis-1/5';

            return (
              <CarouselItem key={index} className={cn(basisClass)}>
                <ImageComponent img={image} current={current} index={index} onSelectImage={() => selectedImage(index)} />
              </CarouselItem>
            )
          })}
        </CarouselContent>
      </Carousel>
    )

  }
export default ImageCarousel