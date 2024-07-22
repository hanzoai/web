"use client"
import React, { useState, useEffect, useRef, type RefObject } from 'react'
import { cn } from '@hanzo/ui/util'
import Link from 'next/link'
import GotoBtn from './svg/Gotobtn'

export default function Work() {
    const [isIntersecting, setIntersecting] = useState(false)
    const [contentAnim, setContentAnim] = useState('')
    const [contactAnim, setContactAnim] = useState('')
    const workRef = useRef() as RefObject<HTMLDivElement>

    useEffect(() => {
        const observer = new IntersectionObserver(([entry]) => {
            setIntersecting(entry.isIntersecting)
        })

        if (workRef.current) {
            observer.observe(workRef.current);
            return () => {
                observer.disconnect();
                setIntersecting(false)
            }
        }
    }, [workRef]);

    useEffect(() => {
        if (isIntersecting) {
            setContentAnim('animate-topIn')
            setContactAnim('animate-bottomIn')
        }
        else {
            setContentAnim('')
            setContactAnim('')
        } 
    }, [isIntersecting])

    return (
        <div ref={workRef} className='flex flex-col md:px-4 pt-20 gap-10 md:gap-20 justify-start'>
            <div className={cn('flex md:flex-row flex-col gap-8', contentAnim)}>
                <div className='2xl:text-5xl xl:text-4xl md:text-3xl text-xl md:font-normal font-medium md:leading-10 leading-7'>Hanzo doesn't just innovate; we transform our clients into industry leaders through unparalleled technological support.</div>
                <div className='2xl:text-3xl md:text-2xl text-lg font-light md:leading-8 leading-6'>We're dedicated to advancing technology with a focus on impactful, global change. At Hanzo, we see the transformative potential in every business—that's why we're here to enhance your solutions and extend your reach.</div>
            </div>
            <div className={cn('flex flex-col md:flex-row md:justify-around w-full border-t-2 pt-4 md:pt-6 gap-4 md:gap-0', contactAnim)}>
                <div className='flex-1 2xl:text-4xl xl:text-3xl md:text-2xl text-[32px] font-medium'>Work with us</div>
                <div className='flex-1 text-base font-light leading-5 '>We are excited to understand your organization's unique needs and help you develop a distinctive, effective digital strategy and campaign that stands out.</div>
                <div className='flex-1 text-left md:text-center'>
                    <div className='text-base'>You can contact us at: </div>
                    <div className='text-base'><Link href={'mailto:info@hanzo.ai'} className=' underline text-muted-1 hover:text-primary transition duration-500'>info@hanzo.ai</Link></div>
                </div>
                <div className='flex-1 2xl:text-2xl md:text-xl text-base font-bold md:font-normal flex justify-start md:justify-center'>
                    <Link href={'mailto:info@hanzo.ai'} className='md:!underline !no-underline text-muted-1 hover:text-primary transition duration-500'>Get in Touch </Link>
                    <GotoBtn className='hidden w-[16px] ml-3' />
                </div>
            </div>
        </div>
    )
}
