import React from 'react'

import { cn } from '@hanzo/ui/util'
import { AuthWidget } from '@hanzo/auth/components'

import { Logo } from '..'

import DesktopNav from '../commerce/desktop-nav-menu'
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

    // TODO move 13px into a size class and configure twMerge to recognize say, 'text-size-nav' 
    // (vs be beat out by 'text-color-nav')
    return (
      <header className={cn('bg-background fixed z-header top-0 left-0 right-0', className)} >
        {/* md or larger */}
        <div className={
          'flex flex-row h-[80px] items-center  justify-between ' +
          'px-[8px] w-full mx-auto max-w-screen'
        }>
          <div className='flex gap-4 items-center'>
            <Logo size='md' href='https://hanzo.ai/' className='flex ml-[25px]' key='two' layout='logo-only' />
            {/* <Logo size='sm' href='/' className='md:flex lg:hidden ml-[15px]' key='one' layout='full' /> */}
            {/* md or larger */}

            <DesktopNav links={links} />
          </div>
          <div className='flex items-center'>
            <Link href={"https://docs.google.com/document/d/1Kk4VmVf6RyVF8Bi3lCawFV9zAr7zV8O96pRU_YfHrf4/edit?usp=sharing"} className='m-[14px] hover:font-bold ease-in duration-200'>
              Contact
            </Link>
            {/* <AuthWidget /> */}
            <Link href={"https://dash.hanzo.ai/"} className='login hover:font-bold ease-in duration-200 px-[15px] py-[10px] border bg-white rounded'>Login</Link>
          </div>
        </div>
      </header>
    )
  }

export default DesktopHeader

