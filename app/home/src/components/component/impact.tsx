'use client'

import React, { useState, useEffect, useRef, type RefObject } from 'react'
import { cn } from '@hanzo/ui/util'
import Link from 'next/link'

import type { Impact } from '@/types';

const _data: Impact[] = [
    { name: 'Triller', founder: 'Jeniffer Patel', role: 'Founder & CEO', image1: '/assets/hanzo-site-animation/1.png', image2: '/assets/hanzo-site-animation/1.png', description: `Jenifer has spearheaded the green technology industry for over a decade, turning her stgartup into a leading provider of eco-friendly products. GG engergy is a pioneer in green solutions across global markets.."We were Greatefull for the opportunity to work with Hanzo and take the company public."` },
    { name: 'Impact Hub Bali', founder: 'Rebecca Rocco', role: 'Managing Director', image1: '/assets/hanzo-site-animation/1.png', image2: '/assets/hanzo-site-animation/1.png', description: `Her expertise in deploying new technologies has streamlined operations for numberous finanical institutions. "hanzo's multi-currency payment system is robust and reliable, making it easier for us to handle a global clientele. There commitment to innovation and security is unmatched` },
]

export function Accordion(
    props: {
        index: number;
        name: string;
        founder: string;
        role: string;
        description: string;
        image1: string;
        image2: string;
        justifyContent: React.Dispatch<React.SetStateAction<string>>;
        accordionOpen1: boolean,
        accordionOpen2: boolean,
        setAccordionOpen1: React.Dispatch<React.SetStateAction<boolean>>,
        setAccordionOpen2: React.Dispatch<React.SetStateAction<boolean>>,
    }
) {
    const { index, name, founder, role, description, image1, image2, justifyContent, accordionOpen1, accordionOpen2, setAccordionOpen1, setAccordionOpen2 } = props;

    const handleOnClick = () => {
        if (index == 0) {
            setAccordionOpen1(!accordionOpen1);
            setAccordionOpen2(false);
        }
        else {
            setAccordionOpen2(!accordionOpen2);
            setAccordionOpen1(false);
        }

        index == 1 && !accordionOpen2 ? justifyContent('justify-end') : justifyContent('justify-center')
    }

    useEffect(() => {
        if (index == 0)
            setAccordionOpen1(false)
        else setAccordionOpen2(false)
    }, [])

    return (
        <div className="hidden border-t-2 lg:flex flex-col 2xl:pt-8 lg:pt-4 py-8">
            <button
                className="text-left"
                onClick={(e) => {
                    e.preventDefault();
                    handleOnClick();
                }}
                aria-expanded={index == 0 ? accordionOpen1 : accordionOpen2}
                aria-controls={`accordion-text-01`}
            >
                <div className='flex flex-row'>
                    <div className='flex flex-1 px-2'>
                        <span className='2xl:text-2xl xl:text-xl text-lg text-muted-1 flex-[30%] '>{name}</span>
                        <span className='2xl:text-2xl xl:text-xl text-lg text-muted-1 flex-[35%]'>{founder}</span>
                        <span className='2xl:text-2xl xl:text-xl text-lg text-muted-1 flex-[35%]'>{role}</span>
                    </div>
                    <div className="flex-1 text-xl px-2">
                        <p className='2xl:text-xl xl:text-lg text-base'>{description}</p>
                    </div>
                </div>
            </button>
            <button
                className="text-left"
                onClick={(e) => {
                    e.preventDefault();
                    handleOnClick();
                }}
            >
                <div
                    id={`accordion-text-01`}
                    role="region"
                    aria-labelledby={`accordion-title-01`}
                    className={`grid pt-5 transition-all duration-300 ease-in-out ${index == 0 ? accordionOpen1 ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0' : accordionOpen2 ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'}`}
                >
                    <div className="overflow-hidden">
                        <div className={cn('flex flex-row items-center gap-10 transition duration-500')}>
                            <div className='rounded-2xl overflow-hidden'>
                                <img src={image1} className='' />
                            </div>
                            <div className='rounded-2xl overflow-hidden'>
                                <img src={image2} className='' />
                            </div>
                        </div>
                    </div>
                </div>
            </button>
        </div>
    )
}

export default function Impact() {
    const [isIntersecting, setIntersecting] = useState(false)
    const [titleAnim, setTitleAnim] = useState('')
    const [contentAnim, setContentAnim] = useState('')
    const [justifyContent, setJustifyContent] = useState('justify-center')
    const [accordionOpen1, setAccordionOpen1] = useState(false)
    const [accordionOpen2, setAccordionOpen2] = useState(false)

    const impactRef = useRef<HTMLDivElement>(null)

    useEffect(() => {
        const observer = new IntersectionObserver(([entry]) => {
            setIntersecting(entry.isIntersecting)
        })

        if (impactRef.current) {
            observer.observe(impactRef.current);
            return () => {
                observer.disconnect();
                setIntersecting(false)
            }
        }
    }, [impactRef]);

    useEffect(() => {
        if (isIntersecting) {
            setTitleAnim('animate-topIn')
            setContentAnim('animate-bottomIn')
        }
        else {
            setTitleAnim('')
            setContentAnim('')
        }
    }, [isIntersecting])

    const handleOnBlur = () => {
        console.log("this is handleonblur")
        setAccordionOpen1(false)
        setAccordionOpen2(false)
        setJustifyContent('justify-center')
    }

    return (
        <div id='impact' className={cn('w-full h-full pt-20 flex flex-col', justifyContent)}>
            <div ref={impactRef} className={cn("border-t-2 lg:flex 2xl:pt-8 lg:pt-4 pt-8 mt-8", titleAnim)}>
                <div className='lg:flex lg:flex-1 lg:px-2'>
                    <h5 className='lg:flex-[30%] !text-muted-1 !lg:text-primary !font-semibold !2xl:text-xl !xl:text-lg !text-base'>OUR IMPACT</h5>
                    <span className='2xl:text-5xl xl:text-4xl lg:text-3xl lg:flex-[70%] lg:font-light font-medium text-2xl'>You don't have to take our word for it.</span>
                </div>
                <div className='2xl:text-4xl xl:text-3xl lg:text-2xl lg:flex-1 text-xl font-light leading-6 lg:mt-0 mt-4 lg:px-2'>
                    <p>Here's what some of our clients have to say about the power of a well-defined campaign and data driven strategy.</p>
                </div>
            </div>
            <div className='text-base mt-9 lg:hidden'>
                {
                    _data.map((_item: Impact, index: number) => (
                        <div key={'title' + _item.name} className="border-t py-4">
                            <Link href={`/impact/${index}`} className='!font-light !text-muted-1 !no-underline'>
                                {_item.name}
                            </Link>
                        </div>
                    ))
                }
            </div>
            <div className={cn('mt-8', contentAnim)} onBlur={handleOnBlur}>
                {
                    _data.map((_item: Impact, index: number) =>
                        <Accordion
                            key={index + '_impact'}
                            index={index}
                            name={_item.name}
                            role={_item.role}
                            image1={_item.image1}
                            image2={_item.image2}
                            founder={_item.founder}
                            description={_item.description}
                            justifyContent={setJustifyContent}
                            accordionOpen1={accordionOpen1}
                            accordionOpen2={accordionOpen2}
                            setAccordionOpen1={setAccordionOpen1}
                            setAccordionOpen2={setAccordionOpen2}
                        />
                    )
                }
            </div>
        </div>
    )
}