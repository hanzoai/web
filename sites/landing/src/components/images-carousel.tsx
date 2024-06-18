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

  const roundedClass = img.rounded ? `rounded-${img.rounded}` : ''
  
  return (
    <ApplyTypography>
      <div onClick={onSelectImage}>
        <ImageBlockComponent
          block={{
            blockType: 'image',
            props: {
              style: {
                width: 'auto',
                objectFit: 'cover'
              },
            },
            ...img
          } as ImageBlock}
          className={cn('mx-auto', current !== index ? 'cursor-pointer' : '', roundedClass, 'lg:h-[576px] h-[398px]')}
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

  return (
    <Carousel
      setApi={setApi}
      options={{ align: 'start', loop: true }}
      className={cn('w-full overflow-hidden max-w-[100vw]', className)}
    >
      <CarouselContent>
        {images.map((image: ImageDef, index) => {
          const basisClass = index === 0 || index === images.length - 1
            ? 'lg:basis-1/4 '
            : index === 1
              ? 'lg:basis-2/4 '
              : 'lg:basis-1/4';

          return (
            <CarouselItem key={index} className={basisClass}>
              <ImageComponent img={image} current={current} index={index} onSelectImage={() => selectedImage(index)} />
            </CarouselItem>
          )
        })}
      </CarouselContent>
    </Carousel>
  )
}

export default ImageCarousel