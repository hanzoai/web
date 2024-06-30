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
    const [currentIndex, setCurrentIndex] = useState(0);

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
      const handleScroll = () => {
        const scroller = scrollRef.current;
        if (scroller && window.scrollY > topScroll) {
          scroller.scrollLeft = window.scrollY - topScroll;
          const newIndex = Math.floor(scroller.scrollLeft / (scroller.scrollWidth / 8));
          if (newIndex !== currentIndex) {
            setCurrentIndex(newIndex)
          }
        }
      }
  
      window.addEventListener('scroll', handleScroll)
  
      return () => {
        window.removeEventListener('scroll', handleScroll)
      }
    }, [topScroll, currentIndex])
    return (
      <div className="!w-full slide snap-start relative" ref={containerRef}>
        <div className="w-full h-screen flex flex-col justify-center sticky top-0 left-0">
          <div className='w-full'>
            <div className='lg:pl-13 lg:pb-31 flex pl-[14px]'>
              <div className="w-[40%]">
                <span className='lg:text-xl text-sm font-bold'>POWERED BY</span>
                <div className='flex lg:align-top lg:items-start items-center'>
                  <HanzoLogo className='lg:w-[80px] w-[23px] mr-[5px]' />
                  <span className='lg:pr-20 lg:ml-5 lg:text-5xl text-base'>Hanzo</span>
                </div>
              </div>
              <p className='lg:text-2xl lg:mt-18 lg:font-medium font-thin'>The game-changer in  your go-to-market strategy.</p>
            </div>
          </div>
          <style>
            {`.no-scrollbar::-webkit-scrollbar {
              display: none;
            }`}
          </style>
          <div className="w-full overflow-x-auto overflow-y-hidden no-scrollbar " ref={scrollRef}>
            <div className="grid grid-rows-2 grid-flow-col gap-x-12 gap-y-4 w-max px-4 mt-15">
              {new Array(8).fill(null).map((_, index) => (
                <section key={index} className={`panel flex box-${index + 1} ${className}`}>
                  <span className="lg:font-semibold lg:text-[12px]">0{index + 1}</span>
                  <div className=" lg:pl-[22px] lg:w-[762.08px] w-[324.8px] pl-2 pt-1">
                    <div className=" border-r border-t w-full h-[33.42px]"></div>
                    <div className="card lg:flex lg:px-7 ">
                      <div className="lg:flex-1 lg:text-4xl lg:font-medium lg:leading-[43px] lg:px-2 text-base leading-5 font-light">{service.title[index]}</div>
                      <div className="lg:flex-1 lg:gap-4 lg:text-sm lg:text-muted-1 leading-[14px] lg:font-normal mt-[18px] text-sm text-primary">
                        <p>
                          {service.details[index][0]}
                        </p>
                        <p className="lg:mt-3 mt-4">
                          {service.details[index][1]}
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