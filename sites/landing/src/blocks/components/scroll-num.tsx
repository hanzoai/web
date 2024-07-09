'use client'
import React, { useState, useEffect, useRef, type RefObject } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { cn } from '@hanzo/ui/util'

import type ScrollNumBlock from '../def/scroll-num'
import type { Block } from '@hanzo/ui/blocks'

gsap.registerPlugin(ScrollTrigger)

// Helper to format large numbers with rounding to the nearest whole million or billion
const formatNumber = (value: number): string => {
  if (value >= 1e9) return `${Math.round(value / 1e9)}B`
  if (value >= 1e6) return `${Math.round(value / 1e6)}M`
  return Math.round(value).toString()
}

// Helper to parse formatted strings back to numbers for animation
const parseNumber = (text: string): number => {
  if (text.includes('B')) return parseFloat(text.replace('B', '')) * 1e9
  if (text.includes('M')) return parseFloat(text.replace('M', '')) * 1e6
  return parseFloat(text) || 0
}

const ScrollNumBlockComponent: React.FC<{
  block: Block,
  className?: string,
  agent?: string
}> = ({
  block,
  className = '',
  agent
}) => {
    if (block.blockType !== 'scroll-num') {
      return <>scrollNum block required</>
    }
    const [isIntersecting, setIntersecting] = useState(false)
    const [classname, setClassname] = useState('')
    const ref = useRef() as RefObject<HTMLDivElement>

    useEffect(() => {
      const observer = new IntersectionObserver(([entry]) => {
        setIntersecting(entry.isIntersecting)
      })

      if (ref.current) {
        observer.observe(ref.current);
        return () => {
          observer.disconnect();
          setIntersecting(false)
        }
      }
    }, [ref]);

    useEffect(() => {
      if (isIntersecting) setClassname('animate-bottomIn')
      else setClassname('')
    }, [isIntersecting])

    const scrollNum = block as ScrollNumBlock

    useEffect(() => {
      const counters = document.querySelectorAll('.animCounter')

      counters.forEach(counter => {
        if (counter instanceof HTMLElement) {
          const finalText = counter.textContent || "0";
          const finalValue = parseNumber(finalText);

          const animationTarget = { value: 0 }
          gsap.to(animationTarget, {
            duration: 1,
            value: finalValue,
            onUpdate: function () {
              counter.textContent = formatNumber(animationTarget.value)
            },
            ease: 'power1.out',
            scrollTrigger: {
              trigger: "#fast-facts",
              start: "top 80%",
              end: "bottom 20%",
              toggleActions: "play none none reverse",
            },
          });
        }
      });
    }, []);

    return (
      <div id='fast-facts' ref={ref} className={cn('grid lg:grid-cols-4 gap-10 px-9 w-full my-8 sm:grid-cols-2 xs:grid-cols-2', classname)}>
        {
          scrollNum.aniNum.map((num, index) => (
            <div className='flex flex-col' key={index}>
              <div className='flex flex-row'>
                <span className='animCounter 2xl:text-[150px] lg:text-[64px] sm:text-[64px] xs:text-[64px]'>{num}</span>
                <span className='2xl:text-[52px] lg:text-[24px] 2xl:py-8 lg:py-2 sm:text-xl xs:text-xl xs:py-4'>{scrollNum.modifier[index]}</span>
              </div>
              <span className='xl:text-2xl lg:text-2xl sm:text-base xs:text-base'>{scrollNum.detail[index]}</span>
            </div>
          ))
        }
      </div>
    )
  }

export default ScrollNumBlockComponent