'use client'
import React from 'react'
import { ScreenfulBlockComponent as Screenful, BlocksComponent } from '@hanzo/ui/blocks'
import { individual_case_study_tiles } from '@/content'
import { NotFound as NotFoundCommon } from '@hanzo/brand'
import siteDef from '@/site-def'

type Props = {
    searchParams?: { [key: string]: string | string[] | undefined }
}

let block = null

if (typeof window !== 'undefined') {
    console.log(window.location.pathname)
    const slug = window.location.pathname.split("case-study/")[1]
    if (slug) {
        if (parseInt(slug) >= 0 && parseInt(slug) < 11) {
            block = slug
        }
    }
}

const Page: React.FC = ({ searchParams }: Props) => {
    const agent = searchParams?.agent as string
    return (block ? <>
        {
            individual_case_study_tiles.map((data, index) => {
                return (
                    <Screenful
                        block={data}
                        initialInView={index === 0}
                        agent={agent}
                        snapTile
                        key={`section-${index}`}
                        contentClx='overflow-hidden'
                        clx='overflow-hidden'
                    />
                )
            })
        }
    </>
    :
    <NotFoundCommon siteDef={siteDef}/>
)
}

export default Page
