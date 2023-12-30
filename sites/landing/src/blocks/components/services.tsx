'use client'
import HanzoLogo from "@/content/slides/companies/svg/hanzo"
import type ServiceBlock from "../def/services"
import type { Block } from "@hanzo/ui/blocks"
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { useEffect, useRef, useState } from "react"


const ServiceBlockComponent: React.FC<{
  block: Block,
  className?: string,
  agent?: string
}> = ({
  block,
  className = '',
  agent
}) => {
    if (block.blockType !== 'service') {
      return <>service block required</>
    }

    const service = block as ServiceBlock

    const containerRef = useRef<HTMLDivElement>(null)
    const scrollRef = useRef<HTMLDivElement>(null)
    const [topScroll, setTopScroll] = useState(0)
    const [scrollHeight, setScrollHeight] = useState(0);

    useEffect(() => {
      // const sections = gsap.utils.toArray(".panel")
      // const container = containerRef.current
      // if (!container) return

      // const scrollTween = gsap.to(sections, {
      //   xPercent: -100 * (sections.length - 1),
      //   ease: "none",
      //   scrollTrigger: {
      //     trigger: container,
      //     pin: true,
      //     scrub: 0.1,
      //     end: () => `+=${container.clientWidth * (sections.length - 1)}`,
      //     markers: true
      //   }
      // })
      // return () => {
      //   ScrollTrigger.getAll().forEach(trigger => trigger.kill())
      // }
    }, [])

    useEffect(() => {
      const element = containerRef.current

      if (element) {
        const elementTopOffset = element.offsetTop
        const elementHeight = element.offsetHeight

        const viewportHeight = window.innerHeight

        const topScrollPos = elementTopOffset

        const bottomScrollPos = elementTopOffset - viewportHeight + elementHeight

        setTopScroll(topScrollPos)
      }
    }, [containerRef])

    useEffect(() => {
      const resize = () => {
        if (scrollRef.current) {
          const scroller = scrollRef.current;
          setScrollHeight(scroller?.scrollWidth - scroller?.clientWidth)
        }
      }

      resize();

      window.addEventListener('resize', () => {
        resize();
      })
    }, [scrollRef])

    useEffect(() => {
      window.addEventListener('scroll', () => {
        const scroller = scrollRef.current;
        if (scroller && window.scrollY > topScroll) {
          scroller.scrollLeft = window.scrollY - topScroll;
        }
      })
    }, [topScroll])

    return (
      <div className="!w-full slide snap-start relative" ref={containerRef}>
        <div className="w-full h-screen flex flex-col justify-center sticky top-0 left-0">
          <div className='w-full'>
            <div className=' pl-13 pb-31'>
              <span className=' text-xl'>POWERED BY</span>
              <div className='flex'>
                <HanzoLogo className='w-[80px]' />
                <span className=' pr-20 ml-5 text-5xl'>Hanzo</span>
                <p className=' text-2xl align-bottom'>The game-changer in  your go-to-market strategy.</p>
              </div>
            </div>
          </div>
          <style>
            {`.no-scrollbar::-webkit-scrollbar {
              display: none;
            }`}
          </style>
          <div className="w-full overflow-x-auto overflow-y-hidden no-scrollbar" ref={scrollRef}>
            <div className="grid grid-rows-2 grid-flow-col gap-x-12 gap-y-4 w-max px-4">
              {new Array(8).fill(null).map((_, index) => (
                <section key={index} className={`panel flex box-${index + 1} ${className}`}>
                  <span>0{index + 1}</span>
                  <div className=" pl-[22px] w-[762.08px]">
                    <div className=" border-r border-t w-full h-[33.42px]"></div>
                    <div className="card flex px-7">
                      <div className="flex-1 text-4xl font-bold">{service.title[index]}</div>
                      <div className="flex-1 gap-4 text-sm text-muted-1">
                        <p>
                          {service.details[index]}
                        </p>
                      </div>
                    </div>
                  </div>
                </section>
              ))}
            </div>
          </div>

        </div>
        <div className="" style={{ height: scrollHeight }}></div>
      </div>
    )
  }

export default ServiceBlockComponent