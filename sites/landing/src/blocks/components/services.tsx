'use client'
import HanzoLogo from "@/content/slides/companies/svg/hanzo"
import type ServiceBlock from "../def/services"
import type { Block } from "@hanzo/ui/blocks"
import { useEffect, useRef, useState, type RefObject } from "react"
import { cn } from "lib/utils"


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

    const [isIntersecting, setIntersecting] = useState(false)
    const [titleAnim, setTitleAnim] = useState('')
    const [bodyAnim, setBodyAnim] = useState('')
    const ref = useRef<HTMLDivElement>(null)

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
        setTitleAnim('animate-topIn')
        setBodyAnim('animate-bottomIn')
      }
      else {
        setTitleAnim('')
        setBodyAnim('')
      }
    }, [isIntersecting])

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
        <div className="w-full h-screen flex flex-col justify-center sticky top-0 left-0 pt-20">
          <div ref={ref} className={cn('flex flex-row 2xl:gap-20 xl:gap-16 lg:gap-12 gap-10 items-center md:px-6 px-2', titleAnim)}>
            <div className='flex flex-col 2xl:gap-6 xl:gap-5 gap-4'>
              <span className='2xl:text-xl xl:text-base text-sm font-semibold whitespace-nowrap'>POWERED BY</span>
              <div className='flex flex-row 2xl:gap-5 xl:gap-4 gap-3'>
                <HanzoLogo className='2xl:w-[81px] xl:w-[70px] md:w-[60px] w-[23px]' />
                <span className='2xl:text-5xl xl:text-4xl md:text-3xl text-base'>Hanzo</span>
              </div>
            </div>
            <p className='text-base'>The game-changer in your go-to-market strategy.</p>
          </div>
          <style>
            {`.no-scrollbar::-webkit-scrollbar {
              display: none;
            }`}
          </style>
          <div className={cn("w-full overflow-x-auto overflow-y-hidden no-scrollbar", bodyAnim)} ref={scrollRef}>
            <div className="grid grid-rows-2 grid-flow-col gap-x-12 gap-y-10 w-max px-4 mt-15">
              {new Array(8).fill(null).map((_, index) => (
                <section key={index} className={`panel flex box-${index + 1} ${className}`}>
                  <span className="lg:font-semibold lg:text-[12px]">0{index + 1}</span>
                  <div className=" lg:ml-[22px] lg:w-[762.08px] w-[324.8px] pt-1">
                    <div className=" border-r border-t w-full h-[33.42px]"></div>
                    <div className="card lg:flex lg:pl-7 lg:pr-9">
                      <div className="lg:flex-1 lg:text-4xl lg:font-medium lg:leading-[43px] lg:px-2 text-base leading-5 font-light">{service.title[index]}</div>
                      <div className="lg:flex-1 flex flex-col">
                        <div className="lg:text-muted-1 leading-[14px] lg:font-normal text-[14px] text-primary">
                          {service.details[index][0]}
                        </div>
                        <div className="lg:text-muted-1 leading-[14px] lg:font-normal mt-[18px] text-[14px] text-primary">
                          {service.details[index][1]}
                        </div>
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