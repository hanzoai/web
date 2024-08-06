'use client'

import type { ImageDef } from '@hanzo/ui/types'

import {
  ApplyTypography,
  Carousel,
  CarouselItem,
  CarouselContent,
  type CarouselApi,
  Button,
} from '@hanzo/ui/primitives'

import { ImageBlockComponent, type ImageBlock } from '@hanzo/ui/blocks'
import type React from 'react'
import { cn } from '@hanzo/ui/util'
import { useEffect, useState, useRef } from 'react'

import images from './images'
import { ChevronLeft, ChevronRight } from 'lucide-react'

const ImageComponent: React.FC<{
  img: ImageDef
  current: number
  index: number
  className?: string
  onSelectImage: () => void,
  containerClassName?: string
}> = ({
  img,
  current,
  index,
  className = '',
  containerClassName = '',
  onSelectImage
}) => {

    return (
      <ApplyTypography className='flex flex-col !gap-4 items-center h-full'>
        <div className={cn('h-full', containerClassName)} onClick={onSelectImage}>
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
            className={cn('mx-auto', current !== index ? 'cursor-pointer' : '', className)}
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
    const [currentIndex, setCurrentIndex] = useState(0);

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
        setCurrentIndex(index);
      }
    }

    const handlePrevButton = () => {
      setCurrentIndex((old) => {
        if (old === 0) {
          return old;
        }

        return old - 1;
      })
    }

    const handleNextButton = () => {
      setCurrentIndex((old) => {
        if (old === images.length - 1) {
          return old;
        }

        return old + 1;
      })
    }

    useEffect(() => {
      if (api) {
        api.scrollTo(currentIndex);
      }
    }, [currentIndex, api])


    return (
      <div ref={carouselRef} className={cn('overflow-hidden relative', contentAnim, 'pb-10 lg:pb-38')}>
        <Carousel
          setApi={setApi}
          options={{ align: 'center', loop: true }}
          className={cn('flex justify-center overflow-hidden relative', className)}
        >
          <CarouselContent>
            {images.map((image: ImageDef, index) => (
              <CarouselItem key={index} className={cn('basis-auto')}>
                <ImageComponent
                  img={image}
                  current={current}
                  index={index}
                  containerClassName='h-[315px] md:h-full'
                  onSelectImage={() => selectedImage(index)}
                />
              </CarouselItem>
            ))}
          </CarouselContent>
        </Carousel>
        <div className='absolute bottom-[10px] lg:bottom-[55px] right-[15px] lg:right-0 flex flex-row gap-2'>
          <Button className='w-8 h-7 p-0' onClick={handlePrevButton}>
            <ChevronLeft />
          </Button>
          <Button className='w-8 h-7 p-0' onClick={handleNextButton}>
            <ChevronRight />
          </Button>
        </div>
      </div>
    )
  }

export default ImageCarousel