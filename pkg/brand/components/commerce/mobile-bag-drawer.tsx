'use client'
import React from 'react'

import { Drawer, DrawerContent} from '@hanzo/ui/primitives'
import { cn } from '@hanzo/ui/util'
import { CartPanel } from '@hanzo/commerce'

import BagButton from './bag-button'

const MobileBagDrawer: React.FC<{
  open: boolean,
  setOpen: (b: boolean) => void
  handleCheckout: () => void
  className?: string
}> = ({
  open,
  setOpen,
  handleCheckout,
  className='',
}) => {
  
  return (
    <Drawer open={open} onOpenChange={setOpen}>
      <DrawerContent className={cn('rounded-t-xl mt-6 pb-12 h-auto', className)} >
        <CartPanel 
          handleCheckout={handleCheckout} 
          className='mt-4 mb-4 border-none py-0 px-4 w-full '
          listClx='rounded-sm pr-3'
          scrollAfter={5}
          itemClx='mt-2'
          totalClx='sticky px-1 pr-2 border rounded-sm -bottom-[1px] bg-background'
          buttonClx='max-w-[220px] flex-none'
        >
          <div className='flex flex-row items-center flex-none justify-center '>
            <BagButton 
              animateOnHover={false} 
              showIfEmpty 
              className=
              'mr-2 relative w-6 h-7'
              iconClx='fill-foreground '
            />
            <p className='font-heading text-foreground text-default'>Your Bag</p>
          </div>
          <div className='h-[1px] w-pr-80 bg-muted-3 mx-auto mt-1.5 flex-none'/>
        </CartPanel>
      </DrawerContent>
    </Drawer>
  )
}

export default MobileBagDrawer
