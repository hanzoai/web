'use client'
import React, { useEffect, useRef, useState } from 'react'
import type DetailsBlock from '../def/details'
import type { Block } from '@hanzo/ui/blocks'
import { Button } from '@hanzo/ui/primitives'


const DetailsBlockComponent: React.FC<{
  block: Block,
  className?: string,
  agent?: string
}> = ({ block, className = '', agent }) => {
  const detail = block as DetailsBlock
  const length = 3
  const elementRef = useRef<HTMLDivElement>(null)
  const [topScroll, setTopScroll] = useState(0)
  const [bottomScroll, setBottomScroll] = useState(0)

  useEffect(() => {
    const element = elementRef.current

    if (element) {
      const elementTopOffset = element.offsetTop
      const elementHeight = element.offsetHeight

      const viewportHeight = window.innerHeight

      const topScrollPos = elementTopOffset

      const bottomScrollPos = elementTopOffset - viewportHeight + elementHeight

      setTopScroll(topScrollPos)
      setBottomScroll(bottomScrollPos)
    }
  }, [])

  const [scrollPosition, setScrollPosition] = useState(0)

  useEffect(() => {
    const handleScroll = () => {
      const position = window.scrollY
      setScrollPosition(position)
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


  return (
    <div className='relative snap-start' ref={elementRef}>

      <div className="z-10 w-full h-[120vh] p-0 sticky top-0 pt-[180px]">

        <div className="sections-container relative">
          <section
            className='grid grid-cols-2 detailSection animated-section h-screen'
          >
            <div className='2xl:pl-24 outer lg:pl-2'>
              <div className='w-4/5'>
                <span className='2xl:text-[20px] lg:text-[12px]'>{detail.pretitle[getCurrentBlockIndex()]}</span>
                <p className='2xl:text-[32px] mt-4 lg:text-[24px]'>{detail.title[getCurrentBlockIndex()]}</p>
                <p className='2xl:text-[55px] lg:text-[32px] font-sans section-heading '>{detail.subtitle[getCurrentBlockIndex()]}</p>
                <p className='2xl:text-[20px] lg:text-[16px] w-[455px] 2xl:pt-[22.42px] lg:pt-[12px]'>{detail.explain1[getCurrentBlockIndex()]}</p>
                <p className='2xl:text-[20px] lg:text-[16px] w-[455px] 2xl:pt-[22.42px] lg:pt-[12px]'>{detail.explain2[getCurrentBlockIndex()]}</p>
                <Button variant={'outline'} rounded={'none'} className=' w-[248px] h-[66.76px] text-base mt-27'>
                  {detail.buttonName[getCurrentBlockIndex()]}
                </Button>

              </div>
            </div>
            <div className='img pr-24 flex justify-center'>{detail.image[getCurrentBlockIndex()]}</div>
          </section>
        </div>
        <div className='absolute top-20 right-0 w-3 bg-transparent h-[calc(100vh-80px)] overflow-hidden'>
          <div className="w-full bg-muted-1" style={{ height: `${(scrollPosition - topScroll) / (bottomScroll - topScroll) * 100}%` }}></div>
        </div>
      </div>
      {new Array(length).fill(null).map((_, index) => (
        <div className="h-[80vh]" key={index} style={{ marginTop: index === 0 ? '-100vh' : '0px' }}></div>
      ))}
      <div className="" style={{ height: '100vh', width: '100%' }}></div>
    </div>
  )
}

export default DetailsBlockComponent