import React, { useState } from 'react'

import { cn } from '@hanzo/ui/util'
import { AuthWidget } from '@hanzo/auth/components'

import { Logo } from '..'

import DesktopNavHanzo from '../commerce/desktop-nav-menu-hanzo'
import Link from 'next/link'


import type { LinkDef } from '@hanzo/ui/types'

const DesktopHeader: React.FC<{
  currentAs: string | undefined
  links: LinkDef[]
  className?: string
}> = ({
  currentAs,
  links,
  className = ''
}) => {

    const [isMenuOpened, setIsMenuOpen] = React.useState(false);
    const opendMenuClass = isMenuOpened ? " h-full" : ""

    // TODO move 13px into a size class and configure twMerge to recognize say, 'text-size-nav' 
    // (vs be beat out by 'text-color-nav')
    return (
      <header
        className={cn('bg-transparent fixed z-header top-0 left-0 right-0 !backdrop-blur-3xl', className, opendMenuClass)}
      >
        {/* md or larger */}
        <div className={
          'flex flex-row h-[80px] items-center  justify-between ' +
          'px-[8px] w-full mx-auto max-w-screen'
        }>
          <div className='flex gap-4 items-center'>
            <Logo size='md' href='https://hanzo.ai/' className='flex ml-[25px]' key='two' layout='logo-only' />
            {/* <Logo size='sm' href='/' className='md:flex lg:hidden ml-[15px]' key='one' layout='full' /> */}
            {/* md or larger */}
          </div>
          <div className=' justify-center'>
            <DesktopNavHanzo links={links} isMenuOpened={isMenuOpened} setIsMenuOpen={setIsMenuOpen} />
          </div>
          <div className='flex items-center'>
            <Link href={"https://dash.hanzo.ai"} className='m-[14px] hover:font-bold ease-in duration-200'>
              Dash
            </Link>
            <AuthWidget />
          </div>
        </div>
      </header>
    )
  }

export default DesktopHeader

