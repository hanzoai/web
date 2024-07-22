'use client'

import React, { useState, useEffect, useRef, type RefObject } from 'react'
import { cn } from '@hanzo/ui/util'
import Link from 'next/link'
import ImageCarousel from '@/components/images-carousel'
import GotoBtn from './svg/Gotobtn'

export default function Innovation() {
    const [isIntersecting, setIntersecting] = useState(false)
    const [titleAnim, setTitleAnim] = useState('')

    const title = 'We believe in Innovation'

    const innovationRef = useRef() as RefObject<HTMLDivElement>

    useEffect(() => {
        const observer = new IntersectionObserver(([entry]) => {
            setIntersecting(entry.isIntersecting)
        })

        if (innovationRef.current) {
            observer.observe(innovationRef.current);
            return () => {
                observer.disconnect();
                setIntersecting(false)
            }
        }
    }, [innovationRef]);

    useEffect(() => {
        if (isIntersecting) {
            setTitleAnim('animate-topIn')
        }
        else {
            setTitleAnim('')
        }
    }, [isIntersecting])

    return (
        <div className='pt-20 h-full w-full flex flex-col'>
            <div ref={innovationRef} className={cn('md:px-4 items-center', titleAnim)}>
                <div className='lg:hidden w-full flex'>
                    <Link href={"#"} className='font-bold lg:underline justify-items-end no-underline'>
                        Our Story
                    </Link>
                    <GotoBtn className='lg:hidden ml-4 w-[17px]' />
                </div>
                <p className='2xl:text-[130px] xl:text-[100px] lg:text-6xl md:text-4xl text-[30px] text-left font-medium'>{title}</p>
            </div>
            <ImageCarousel />
        </div>
    )
}