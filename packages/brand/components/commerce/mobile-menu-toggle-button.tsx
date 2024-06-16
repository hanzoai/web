'use client'
import React, { useState } from 'react'

import { Plus } from 'lucide-react'

import { Button } from '@hanzo/ui/primitives'
import { cn } from '@hanzo/ui/util'

const MobileMenuToggleButton: React.FC<{
  open: boolean
  setOpen: (b: boolean) => void
  className?: string
}> = ({
  open,
  setOpen,
  className=''
}) => {

  return (
    <Button 
      variant='ghost' 
      size='default' 
      rounded='full' 
      onClick={() => {setOpen(!open)}} 
      className={cn('p-0 aspect-square hover:bg-background sm:hover:bg-level-1 active:scale-75', className)}
    >
      <Plus width={28} height={28} className={
        'block h-full will-change-transform transition-transform transition-scale transition-duration-[1500] ' + 
        (open ? 'rotate-[135deg] scale-110' : 'rotate-none')
      } />
    </Button>
  )
}

export default MobileMenuToggleButton
