'use client'

import React, { useState, useEffect, useRef, type RefObject } from 'react'
import { cn } from '@hanzo/ui/util'

import HanzoLogo from 'node_modules/@hanzo/brand/components/icons/hanzo-logo'
import { Button, } from '@hanzo/ui/primitives'

export default function IntroMobile() {
    const [isIntersecting, setIntersecting] = useState(false)
    const [titleAnim, setTitleAnim] = useState('')

    const introRef = useRef() as RefObject<HTMLDivElement>

    useEffect(() => {
        const observer = new IntersectionObserver(([entry]) => {
            setIntersecting(entry.isIntersecting)
        })

        if (introRef.current) {
            observer.observe(introRef.current);
            return () => {
                observer.disconnect();
                setIntersecting(false)
            }
        }
    }, [introRef]);

    useEffect(() => {
        if (isIntersecting) {
            setTitleAnim('animate-topIn')
        }
        else {
            setTitleAnim('')
        }
    }, [isIntersecting])

    return (
        <div className={cn('pt-20 h-full w-full flex flex-col', titleAnim)}>
            <div ref={introRef} className='hanzologo flex items-center justify-center w-full mb-10 2xl:mb-20 mt-20 animate-bottomIn'>
                <HanzoLogo />
            </div>
            <div className='flex flex-col items-center justify-center w-full'>
                <span className=' text-xl font-normal font-sans'>CUT THROUGH THE COMPLEXITIES</span>
                <span className=' text-2xl mt-12'>We empower businesses to redefine success with pioneering digital solutions - enabling acceleration and growth that expand companies reach.</span>
            </div>
            <div className='flex flex-row gap-2 mt-14'>
                <Button variant={'outline'} rounded={'none'} className='w-[145px] h-[36px] text-base'>
                    CASE STUDIES
                </Button>
                <Button variant={'primary'} rounded={'none'} className='w-[145px] h-[36px] text-base'>
                    SCHEDULE CALL
                </Button>
            </div>
        </div>
    )
}