'use client'
import React, { useEffect, useRef, useState, type RefObject } from 'react'
import type DetailsBlock from '../def/details'
import type { Block } from '@hanzo/ui/blocks'
import { Button } from '@hanzo/ui/primitives'
import GotoBtn from '@/content/slides/details/svg/Gotobtn'
import { cn } from '@hanzo/ui/util'

const DetailsBlockComponent: React.FC<{
  block: Block,
  className?: string,
  agent?: string
}> = ({ block, className = '', agent }) => {
  const detail = block as DetailsBlock
  const length = 3
  const elementRef = useRef<HTMLDivElement>(null)
  const videoRef = useRef<HTMLVideoElement>(null)
  const [topScroll, setTopScroll] = useState(0)
  const [bottomScroll, setBottomScroll] = useState(0)
  const [isIntersecting, setIntersecting] = useState(false)
  const [contentAnim, setContentAnim] = useState('')
  const [scrollIndex, setScrollIndex] = useState(0)
  const [scrollPosition, setScrollPosition] = useState(0)
  const [imgSrc, setImgSrc] = useState('')
  const frameCounter = [35, 59, 60]

  const detailRef = useRef() as RefObject<HTMLDivElement>

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      setIntersecting(entry.isIntersecting)
    })

    if (detailRef.current) {
      observer.observe(detailRef.current);
      return () => {
        observer.disconnect();
        setIntersecting(false)
      }
    }
  }, [detailRef]);

  useEffect(() => {
    setImageSource()
    if (scrollIndex !== getCurrentBlockIndex()) {
      console.log(getCurrentBlockIndex())
      setContentAnim('')
      setTimeout(() => {
        setContentAnim('animate-leftIn')
      }, 50)
    }
    setScrollIndex(getCurrentBlockIndex())
  }, [scrollPosition])

  useEffect(() => {
    if (isIntersecting) {
      setContentAnim('animate-leftIn')
    }
    else {
      setContentAnim('')
    }
  }, [isIntersecting])

  useEffect(() => {
    const element = elementRef.current

    if (element) {
      const elementTopOffset = element.offsetTop
      const elementHeight = element.offsetHeight
      const viewportHeight = window.innerHeight

      const topScrollPos = elementTopOffset
      const bottomScrollPos = elementTopOffset + elementHeight - viewportHeight

      setTopScroll(topScrollPos)
      setBottomScroll(bottomScrollPos)
      
      for (let block = 0; block < 2; block++) {
        for (let i = 1; i <= frameCounter[block]; i++) {
          const img = new Image();
          img.src = `/assets/hanzo-site-animation/block${block}/${i}.png`
          console.log(img.src)
        }
      }
    }

  }, [])

  useEffect(() => {
    const handleScroll = () => {
      setScrollPosition(window.scrollY)
    }

    window.addEventListener('scroll', handleScroll)

    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  const getCurrentBlockIndex = () => {
    let scrollPercent = (scrollPosition - topScroll) / (bottomScroll - topScroll) * 100
    let index = Math.floor(scrollPercent * length / 100)
    if (index < 0) {
      index = 0
    } else if (index > 2) {
      index = 2
    }
    return index
  }

  const setImageSource = () => {
    let progress = (scrollPosition - topScroll) * length / (bottomScroll - topScroll)
    let index = Math.min(frameCounter[scrollIndex] - 1, Math.floor((progress - scrollIndex) * frameCounter[scrollIndex]))

    if (index >= 0) setImgSrc(`/assets/hanzo-site-animation/block${scrollIndex}/${index + 1}.png`)
  }

  return (
    <div className='relative snap-start' ref={elementRef}>
      <div className="flex z-10 w-full h-[100vh] px-5 pt-20 sticky top-0">
        <div className="flex sections-container relative self-center w-full h-full">
          <section className='flex flex-col md:flex-row detailSection animated-section h-full w-full py-5 self-center'>
            <div ref={detailRef} className={cn('flex flex-col justify-center 2xl:lg:pl-24 outer lg:pl-2 md:order-1 order-2 px-[12px] h-pr-50 md:h-pr-100 w-full md:w-pr-40', contentAnim)}>
              <span className='2xl:text-[20px] lg:text-[12px] lg:block hidden'>{detail.pretitle[getCurrentBlockIndex()]}</span>
              <p className='2xl:text-[32px] lg:text-[24px] lg:block mt-2 2xl:mt-4 hidden'>{detail.title[getCurrentBlockIndex()]}</p>
              <p className='2xl:text-[55px] 2xl:leading-[64px] font-sans section-heading text-2xl leading-[29px] font-bold 2xl:mt-22 xl:mt-16 mt-10'>{detail.subtitle[getCurrentBlockIndex()]}</p>
              <p className='2xl:text-[20px] lg:text-[16px] lg:leading-6 text-xl leading-5 mt-4 xl:mt-5 2xl:mt-6'>{detail.explain1[getCurrentBlockIndex()]}</p>
              <p className='2xl:text-[20px] lg:text-[16px] lg:leading-6 text-xl leading-5 mt-4 xl:mt-5 2xl:mt-6'>{detail.explain2[getCurrentBlockIndex()]}</p>
              <Button variant={'outline'} rounded={'none'} className='hidden lg:block w-[248px] h-[66.76px] md:text-base 2xl:mt-26 xl:mt-20 mt-16'>
                {detail.buttonName[getCurrentBlockIndex()]}
              </Button>
              <Button variant={'link'} rounded={'none'} className='lg:hidden text-sm font-bold w-[300px] px-0 py-[22px] !justify-start'>
                {detail.buttonName[getCurrentBlockIndex()]}
                <GotoBtn className='ml-3' />
              </Button>
              <span className='text-sm lg:hidden'>{detail.pretitle[getCurrentBlockIndex()]}</span>
            </div>
            <div className={cn('md:order-2 order-1 self-center justify-center h-pr-50 md:h-pr-90 w-full md:w-pr-60 flex mx-auto px-10')}><img src={imgSrc}></img></div>
          </section>
        </div>
        <div className='absolute top-20 right-0 w-3 bg-transparent h-[calc(100vh-80px)] overflow-hidden'>
          <div className="w-full bg-muted-1" style={{ height: `${(scrollPosition - topScroll) / (bottomScroll - topScroll) * 100}%` }}></div>
        </div>
      </div>
      {new Array(length).fill(null).map((_, index) => (
        <div className="h-[300vh]" key={index} style={{ marginTop: index === 0 ? '-100vh' : '0px' }}></div>
      ))}
      <div className="" style={{ height: '100vh', width: '100%' }}></div>
    </div>
  )
}

export default DetailsBlockComponent