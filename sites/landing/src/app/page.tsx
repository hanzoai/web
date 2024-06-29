import React from 'react'

import { ScreenfulBlockComponent as Screenful, BlocksComponent } from '@hanzo/ui/blocks'
import { DrawerMargin, Footer, Header } from '@hanzo/brand'

import { desktopTiles, mobileTiles } from '@/content'
import FooterSlide from '@/components/footer-slide'
import siteDef from '@/site-def'
import '@/blocks/registerComponents'

type Props = {
  searchParams?: { [key: string]: string | string[] | undefined }
}

const Page = ({ searchParams }: Props) => {
  // see src/middleware.ts
  const agent = searchParams?.agent as string
  const tiles = agent === 'desktop' ? desktopTiles : mobileTiles
  const swipeOuter = 'snap-start snap-always h-[100vh] '
  const swipeInner = 'pt-[68px] md:pt-[104px] pb-[24px] '
  const swipeInnerTouch = swipeInner + 'h-[100svh] '
  return (<>
    <Header siteDef={siteDef}/>
    {tiles.map((banner, index) => {
      if (banner.blockType == 'screenful')
        return (
          <Screenful
            block={banner}
            initialInView={index === 0}
            agent={agent}
            snapTile
            key={`section-${index}`}
          />
        )
      else {
        return (
          <BlocksComponent blocks={[banner]} key={`section-${index}`}></BlocksComponent>
          
        )
      }
    })}
    <FooterSlide agent={agent} />
  </>)
}

export default Page
