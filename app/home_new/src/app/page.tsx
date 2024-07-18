import React from 'react'
import { Footer, Header } from '@hanzo/brand'
import { ApplyTypography } from '@hanzo/ui/primitives'
import { tiles } from '@/content'
import { ScreenfulBlockComponent as Screenful } from '@hanzo/ui/blocks'


/* for example, as slug
type Props = {
  params: { slug: string }
  searchParams?: { [key: string]: string | string[] | undefined }
}
*/
import siteDef from '../site-def'

type Props = {
  searchParams?: { [key: string]: string | string[] | undefined }
}

const page = ({ searchParams }: Props) => {
  const agent = searchParams?.agent as string
  return (
    <>
      <Header siteDef={siteDef} />
      {tiles.map((banner, index) => (
        <Screenful
          block={banner}
          initialInView={index === 0}
          agent={agent}
          key={`section-${index}`} />
      ))}
      <Footer siteDef={siteDef} className='max-w-screen-2xl w-full pt-16 lg:mx-auto ' />
    </>
  )
}

export default page
