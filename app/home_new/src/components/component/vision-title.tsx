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
    <div ref={visionRef} className={cn('w-full 2xl:mb-30 xl:mb-20 mb-10 mt-18', classname)}>
      <p className='!mb-6 2xl:text-[22px] xl:text-base text-sm font-medium leading-8'>OUR VISION</p>
      <span className='2xl:text-[22px] lg:text-[22px] text-[22px] 2xl:leading-8 font-light text-muted-3'>
      We empower businesses to transcend traditional boundaries and redefine success with pioneering digital solutions - enabling acceleration and growth that expand companies reach by providing a suite of digital tools that simplify complex challenges when launching, scaling, and innovating.
      </span>
    </div>
  )
}
