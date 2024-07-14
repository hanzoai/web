'use client'
import React from 'react'

import { cn } from '@hanzo/ui/util'

import Logo from '../../logo'
import type { TShirtSize } from '@hanzo/ui/types'

const CloseButton: React.FC<{
  close: () => void
  size?: TShirtSize 
  className?: string
}> = ({
  close,
  size,
  className=''
}) => (
  <div
    onClick={close}
    className={cn('md:self-start', className)}
  >
    <Logo layout='text-only' href='/' size={size}/>
  </div>    
)

export default CloseButton
