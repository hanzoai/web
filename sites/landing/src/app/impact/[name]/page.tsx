'use client'
import React from 'react';
import type { Impact } from "@/types"
import { useEffect, useRef, useState } from "react"
import { useRouter } from 'next/navigation';
import { X } from 'lucide-react'
// data
const data: Impact[] = [
  { name: 'Triller', founder: 'Jeniffer Patel', role: 'Founder & CEO', description: `Jenifer has spearheaded the green technology industry for over a decade, turning her stgartup into a leading provider of eco-friendly products. GG engergy is a pioneer in green solutions across global markets.."We were Greatefull for the opportunity to work with Hanzo and take the company public."` },
  { name: 'Impact Hub Bali', founder: 'Rebecca Rocco', role: 'Managing Director', description: `Her expertise in deploying new technologies has streamlined operations for numberous finanical institutions. "hanzo's multi-currency payment system is robust and reliable, making it easier for us to handle a global clientele. There commitment to innovation and security is unmatched` },
]
interface Props {
  params: { name: string }; // Existing prop
}

const ImpactDetailPage: React.FC<Props> = ({ params }: Props) => {
  //router
  const router = useRouter();
  // states
  const [topScroll, setTopScroll] = useState(0)
  const [scrollHeight, setScrollHeight] = useState(0);
  const [currentIndex, setCurrentIndex] = useState(0);
  // refs
  const containerRef = useRef<HTMLDivElement>(null)
  const scrollRef = useRef<HTMLDivElement>(null)

  const _data: Impact | undefined = React.useMemo(() => data[Number(params.name)], [params.name]);

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
    <div ref={containerRef}>
      <div className="w-full h-screen flex sticky top-0 left-0 p-2">
        <div className="w-full border-b border-t border-[#45423A] h-full">
          <div className='flex justify-between'>
            <div className='text-base my-6'>{_data?.name}</div>
            <div className='pt-2 cursor-pointer hover:opacity-60'><X onClick={() => router.push("/#impact")} /></div>
          </div>
          <div className='text-base mt-4'>{_data?.founder}</div>
          <div className='text-base mt-4'>{_data?.role}</div>
          <p className='text-base mt-4'>{_data?.description}</p>
          <style>
            {`.no-scrollbar::-webkit-scrollbar {
                display: none;
              }`}
          </style>
          <div className="w-full overflow-x-auto overflow-y-hidden no-scrollbar " ref={scrollRef}>
            <div className="grid grid-rows-1 grid-flow-col gap-x-4 gap-y-4 w-max mt-15">
              {new Array(8).fill(null).map((_, index) => (
                <section key={index} className={`panel flex box-${index + 1} ${'className'}`}>
                  <div className="lg:pl-[22px] lg:w-[762.08px] w-[calc(100vw-16px)]">
                    <div className="card">
                      <div >
                        <img src='/assets/innovation/conference.png' className="flex-1"></img>
                      </div>
                    </div>
                  </div>
                </section>
              ))}
            </div>
          </div>
        </div>

      </div>
      <div className="" style={{ height: scrollHeight }}></div>
    </div>
  )
}
export default ImpactDetailPage;