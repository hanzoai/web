'use client'
import React from 'react'

import type { SiteDef } from '../../site-def'

import DesktopHeader from './desktop'
import MobileHeader from './mobile'
import { cn } from '@hanzo/ui/util'
import { ChatWidget } from '../../components'

const Header: React.FC<{
  siteDef: SiteDef
  className?: string
}> = ({
  siteDef,
  className = ''
}) => {

    // TODO
    const [open, setOpen] = React.useState<boolean>(false);

    const { nav: { common, featured }, currentAs } = siteDef
    const links = (featured) ? [...common, ...featured] : common
    const isDesktopView = (): boolean => {
      if (typeof window === 'undefined') return false 
      return window.innerWidth > 768 
    }

    return (<>
      <DesktopHeader
        className={cn(className, 'hidden md:flex')}
        links={links}
        currentAs={currentAs}
      />
      <MobileHeader
        className={cn(className, 'md:hidden')}
        links={links}
        currentAs={currentAs}
        setChatbotOpen={setOpen}
      />
      {isDesktopView() && (
        <ChatWidget
          title='LUX'
          subtitle='AI'
          chatbotUrl='https://lux.chat/iframe'
          suggestedQuestions={siteDef.chatbot?.suggestedQuestions ?? []}
        />
      )}
    </>)
  }

export default Header
