"use client"
import React, { useState, useEffect, useRef, type RefObject } from 'react'
import { cn } from '@hanzo/ui/util'

export default function VisionTitle() {
  const [isIntersecting, setIntersecting] = useState(false)
  const [classname, setClassname] = useState('')
  const visionRef = useRef() as RefObject<HTMLDivElement>

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      setIntersecting(entry.isIntersecting)
    })

    if (visionRef.current) {
      observer.observe(visionRef.current);
      return () => {
        observer.disconnect();
        setIntersecting(false)
      }
    }
  }, [visionRef]);

  useEffect(() => {
    if (isIntersecting) setClassname('animate-topIn')
    else setClassname('')
  }, [isIntersecting])

  return (
    <div ref={visionRef} className={cn('w-full px-9 2xl:mb-30 xl:mb-20 mb-10 mt-20', classname)}>
      <p className='text-muted-1 !mb-10 2xl:text-[20px] xl:text-base text-sm font-normal'>OUR VISION</p>
      <span className='2xl:text-[52px] lg:text-4xl text-2xl 2xl:leading-[64px] font-light'>
        We <b className='font-bold '>empower businesses</b> to transcend traditional boundaries and redefine success with pioneering digital solutions - enabling acceleration and growth that expand companies reach by providing a suite of digital tools that simplify complex challenges when launching, scaling, and innovating.
      </span>
    </div>
  )
}
