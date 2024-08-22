import React from 'react'
import { useParams } from 'next/navigation'

import HanzoLogo from '@/content/slides/companies/svg/hanzo'
import case_studies from '@/content/case-study'

export const Description: React.FC = () => {
    const params = useParams<{ slug: string }>()
    const block = case_studies[parseInt(params.slug)]

    return (
        <div className='pt-20 px-6 2xl:px-16 h-full w-full flex flex-col items-center justify-center gap-10'>
            <div className='md:flex-[85%] flex items-center justify-center w-full overflow-hidden rounded-lg xl:rounded-xl 2xl:rounded-2xl'>
                <img src={block?.individual_image} className='w-full'></img>
            </div>
            <span className='md:flex-[15%] text-xl md:text-2xl lg:text-3xl xl:text-4xl 2xl:text-[52px] text-center font-normal'>
                {block?.description}
            </span>
        </div>
    )
}