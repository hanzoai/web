'use client'
import React from 'react'
import { ScreenfulBlockComponent as Screenful } from '@hanzo/ui/blocks'
import { case_study_tiles, case_studies } from '@/content'

type Props = {
    searchParams?: { [key: string]: string | string[] | undefined }
}

const Page: React.FC = ({ searchParams }: Props) => {
    const agent = searchParams?.agent as string
    return (<>
        {
            case_study_tiles.map((banner, index) => {
                return (
                    <Screenful
                        block={banner}
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
        {
            case_studies.map((banner, index) => {
                return (
                    <Screenful
                        block={banner}
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
    </>)
}

export default Page
