import React from 'react'
import { useParams } from 'next/navigation'

import HanzoLogo from '@/content/slides/companies/svg/hanzo'
import case_studies from '@/content/case-study'

export const Intro: React.FC = () => {
    const params = useParams<{ slug: string }>()
    const block = case_studies[parseInt(params.slug)]

    return (
        <div className='pt-20 h-full w-full flex flex-col items-center justify-center gap-20 xl:gap-30 2xl:gap-40'>
            <div className='hanzologo flex flex-col items-center justify-center w-full gap-10'>
                <HanzoLogo />
                <div className='text-6xl md:text-[90px] lg:text-[120px] xl:text-[150px] 2xl:text-[180px] font-semibold font-sans'>
                    Hanzo
                </div>
            </div>
            <div className='flex flex-col gap-6 xl:gap-8 2xl:gap-10'>
                <div className='text-4xl md:text-5xl lg:text-[64px] xl:text-[80px] 2xl:text-[96px] 2xl:leading-[116.18px] tracking-[0.16em] text-center font-semibold font-sans uppercase'>
                    {block?.title}
                </div>
                <div className='text-lg md:text-xl lg:text-2xl xl:text-3xl 2xl:text-4xl text-center font-normal font-sans'>
                    {block?.title_description}
                </div>
            </div>
        </div>
    )
}