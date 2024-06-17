import React from 'react'
import Link from 'next/link'

import { type TShirtSize  } from '@hanzo/ui/types'
import { cn } from '@hanzo/ui/util'

import * as Icons from './icons'

const Logo: React.FC<{
  size?: TShirtSize
  layout?: 'text-only' | 'logo-only' | 'full'
  href?: string
  className?: string
  spanClassName?: string
}> = ({
  size,
  href, // no default please!
  className='',
  spanClassName,
  layout='full'
}) => {
  let classes: any = {}
  const toAdd = (layout === 'logo-only') ? {
    span: ' hidden',
    icon: ''
  } :
  (layout === 'text-only') ? {
    span: '',
    icon: ' hidden'
  } : 
  {
    span: '',
    icon: ''
  }

  if (size === 'lg' || size === 'xl' ) { // for safety
    classes.icon = 'h-10 w-10 mr-4 color-inherit' + toAdd.icon
    classes.span = 'text-3xl' + toAdd.span
  }
    // match lux.network
  else if (size === 'md') {
    classes.icon = 'h-[40.82px] w-[40.82px] mr-[12px] color-inherit' + toAdd.icon
    classes.span = 'text-[1.8rem]/[1.8rem] tracking-tighter' + toAdd.span
  }
  else if (size === 'sm' ) {
    classes.icon = 'h-6 w-6 mr-2 color-inherit' + toAdd.icon
    classes.span = 'text-lg' + toAdd.span
  }
    // xs
  else {
    classes.icon = 'h-4 w-4 mr-1 color-inherit' + toAdd.icon
    classes.span = 'text-base' + toAdd.span
  }

  const outerClasses = 'flex flex-row items-center pl-[16.34px] ' + className
  const spanClasses = 'inline-block font-sans pl-[7.65px] ' 
    + spanClassName
    + (href ? ' hover:text-accent ' : ' cursor-default ') 
    + classes.span 

  const Inner: React.FC = () => (<>
      <Icons.logo className={classes.icon} />
      <span className={cn(spanClasses, ' text-inherit ')}>Hanzo</span>
  </>)


  return (
    href ? (
      <Link href={href} className={outerClasses} >
        <Inner />
      </Link>
  
    ) : (
      <span className={outerClasses} >
        <Inner />
      </span>
    )
  )
}

export default Logo