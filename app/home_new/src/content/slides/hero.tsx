import {
  type EnhHeadingBlock,
  type Block,
  type CTABlock,
  ScreenfulBlockComponent,
  type SpaceBlock,
  type ElementBlock,
  type ScreenfulBlock
} from "@hanzo/ui/blocks"
import CallIcon from "../svg/call"
import VisionTitle from '@/components/component/vision-title'
import type ScrollNumBlock from '@/blocks/def/scroll-num'

const heading = `Cut through the complexities`
const byline = `We offer a powerful suite of tools that streamline complex challenges at every stage of your journey - launching, scaling, and innovating.`

const screenful = {
  blockType: 'screenful',
  columnSpecifiers: ['center vert-center'],
  contentColumns: [
    [
      {
        blockType: 'element',
        element: <span className=" font-medium text-5xl text-center w-full leading-[85px]">{heading}</span>
      } as ElementBlock,
      {
        blockType: 'space',
        level: 6,
      } as SpaceBlock,
      {
        blockType: 'element',
        element: <div className="font-normal text-center text-muted-2 align-baseline leading-7 text-lg w-full flex justify-center"><div className="w-[580px]">{byline}</div></div>
      } as ElementBlock,
      {
        blockType: 'space',
        level: 6,
      } as SpaceBlock,
      {
        blockType: 'cta',
        specifiers: 'desktop-dont-fill mobile-2-columns',
        elements: [
          {
            title: "Browse Case Studies",
            href: "#",
            variant: "outline",
            size: "lg",
            rounded: "md"
          },
          {
            title: "Schedule Call",
            icon: <CallIcon />,
            iconAfter: false,
            href: "#",
            variant: "primary",
            size: "lg",
            rounded: "md"
          }
        ]
      } as CTABlock,
      {
        blockType: 'element',
        element: (
          <VisionTitle></VisionTitle>
        )
      } as ElementBlock,
      {
        blockType: 'scroll-num',
        aniNum: ["11", "100", "1B", "120"],
        modifier: ["Years", "+", "+", "+"],
        detail: ["Growing Companies", "Companies Scaled", "Client Revenue Generated", "Countries Worldwide"]
      } as ScrollNumBlock
    ]
  ]
} as ScreenfulBlock

export default {
  blockType: 'screenful',
  specifiers: 'full-screen-width no-gutters',
  contentColumns: [
    [
      {
        blockType: 'element',
        element: (
          <div className="px-[168px] w-screen pt-38 relative">
            <div className="absolute top-36 left-pr-50 -translate-x-1/2">
              <img src="/assets/hanzo-home-hero/hero-bg.png" alt="" />
            </div>
            <div className="w-full border-2 border-muted-4 relative">
              <ScreenfulBlockComponent block={screenful} clx="!px-0" />
              <div className="w-[27px] h-[27px] absolute top-0 left-0 -translate-x-full -translate-y-full border-r-2 border-b-2 border-muted-4"></div>
              <div className="w-[27px] h-[27px] absolute top-0 right-0 translate-x-full -translate-y-full border-l-2 border-b-2 border-muted-4"></div>             
            </div>
          </div>
        )
      } as ElementBlock
    ]
  ]
} as ScreenfulBlock