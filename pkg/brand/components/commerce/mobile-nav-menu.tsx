'use client'
import React from 'react'
import type { LinkDef } from '@hanzo/ui/types'
import { cn } from '@hanzo/ui/util'
import type { LinkDefExtended, ChildMenu } from '../../site-def/main-nav'
import MobileNavMenuAI from './mobile-nav-menu-ai'
import MobileNavMenuItem from './mobile-nav-menu-item'
import MobileAuthWidget from './mobile-login-button'
import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from '@hanzo/ui/primitives'
import { ChevronDown } from 'lucide-react'
import Link from 'next/link'

const MobileNav: React.FC<{
  currentAs: string | undefined
  links: LinkDefExtended[]
  className?: string
  commonItemClx?: string | ((def: LinkDef) => string)
  setChatbotOpen: (open: boolean) => void
  setMenuOpen: (open: boolean) => void
  setMenuState: (arg: 'closed' | 'nav' | 'login' | 'bag') => void
}> = ({
  currentAs,
  links,
  setMenuState,
  className = '',
  commonItemClx,
  setChatbotOpen,
  setMenuOpen
}) => (
    links.length > 0 ? (
      <div className={cn('flex flex-col h-full', className)}>
        <MobileNavMenuAI setMenuOpen={setMenuOpen} />
        <div className="flex flex-col flex-1 overflow-auto">
          <Accordion type="single" collapsible className='w-full h-full'>
            {links.map((el, index) => {
              const itemClx = (commonItemClx) ? (typeof commonItemClx === 'string' ? commonItemClx : commonItemClx(el)) : ''
              const variant = el.variant ?? 'link'
              let internalClx = variant === 'link'
                ? ' text-muted hover:text-foreground active:text-accent rounded-none'
                : ' min-w-0'

              if (currentAs && currentAs === el.href) {
                internalClx += ' pointer-events-none'
                if (variant === 'link') {
                  internalClx += ' text-accent'
                }
              }

              if (!el.isAIMenu) {
                return (
                  <AccordionItem key={index} value={el.title ? el.title : ""} className='!no-underline !border-0 px-6'>
                    <AccordionTrigger className={cn(internalClx, itemClx, '')}>
                      <div className={cn(internalClx, itemClx, 'flex items-center justify-between w-full pl-3 text-base font-normal leading-6')}>
                        {el.title}
                      </div>
                      <ChevronDown className="w-4 h-4 mr-3" />
                    </AccordionTrigger>
                    <AccordionContent>
                      {el.childMenu && (
                        <div className="px-4">
                          {Object.entries(el.childMenu.reduce((acc, child) => {
                            const group = acc[child.groupName ? child.groupName : ""] || []
                            group.push(child)
                            acc[child.groupName ? child.groupName : ""] = group
                            return acc
                          }, {} as { [key: string]: ChildMenu[] })).map(([groupName, children]) => (
                            <div key={groupName}>
                              <div className="mt-4 mb-4 font-light text-muted-1">{groupName}</div>
                              {children.map((child, childIndex) => (
                                <div key={childIndex} className="m-2">
                                  <div className="flex items-center py-1">
                                    <span>
                                      {child.icon && child.icon}
                                    </span>
                                    <Link
                                      href={child.href}
                                      className="text-muted-2 hover:underline ml-5 hover:text-primary"
                                      target={child.newTab ? '_blank' : '_self'}
                                      rel="noopener noreferrer"
                                    >
                                      {child.title}
                                    </Link>
                                  </div>
                                </div>
                              ))}
                            </div>
                          ))}
                        </div>
                      )}
                    </AccordionContent>
                  </AccordionItem>
                )
              }
            })}
          </Accordion>
        </div>
        <MobileAuthWidget className='text-2xl z-10' handleLogin={() => { setMenuState('login') }} />
      </div>
    ) : null
  );

export default MobileNav;