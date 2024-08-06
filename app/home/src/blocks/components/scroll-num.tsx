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
      if (isIntersecting) {
        numberAnim()
        setClassname('animate-bottomIn')
      }
      else setClassname('')
    }, [isIntersecting])

    const scrollNum = block as ScrollNumBlock

    function numberAnim() {
      const counters = document.querySelectorAll('.animCounter')
      const content = ["11", "100", "1B", "120"]

      counters.forEach((counter, index) => {
        if (counter instanceof HTMLElement) {
          const finalText = content[index] || "0";
          const finalValue = parseNumber(finalText);

          const animationTarget = { value: 0 }
          gsap.to(animationTarget, {
            duration: 1 + index * 0.8,
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
            }
          });
        }
      });
    }

    return (
      <div id='fast-facts' ref={ref} className={cn('grid grid-cols-1 lg:grid-cols-4 w-full sm:grid-cols-2', classname)}>
        {
          scrollNum.aniNum.map((num, index) => (
            <div className={'w-full flex flex-col justify-center items-center py-[56px] mx-auto border-none sm:border-r border-white-10 ' + `${index === scrollNum.aniNum.length - 1 && 'border-none'}`} key={index}>
              <div className='flex flex-row font-semibold'>
                <span className='animCounter text-xl lg:text-[40px]'>{num}</span>
                {
                  index === 0 && <span>&nbsp;</span>
                }
                <span className='text-xl lg:text-[40px]'>{scrollNum.modifier[index]}</span>
              </div>
              <span className='text-white-65 text-base lg:text-[18px] text-center'>{scrollNum.detail[index]}</span>
            </div>
          ))
        }
      </div>
    )
  }

export default ScrollNumBlockComponent