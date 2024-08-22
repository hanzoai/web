'use client'
import React from 'react'
import { useParams } from 'next/navigation'
import { ScreenfulBlockComponent as Screenful } from '@hanzo/ui/blocks'
import { individual_case_study_tiles } from '@/content'
import { NotFound as NotFoundCommon } from '@hanzo/brand'
import siteDef from '@/site-def'

type Props = {
    searchParams?: { [key: string]: string | string[] | undefined }
}

const Page: React.FC = ({ searchParams }: Props) => {
    const agent = searchParams?.agent as string
    const params = useParams<{ slug: string }>()

    return (parseInt(params.slug) <= 10 ? <>
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
