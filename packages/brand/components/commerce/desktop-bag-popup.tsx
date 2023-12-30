'use client'
import React, { useState, useEffect } from 'react'
import { useRouter } from 'next/navigation'

import { X } from 'lucide-react'

import {
  Popover,
  PopoverContent,
  PopoverTrigger,
  PopoverClose,
} from "@hanzo/ui/primitives"

import { cn } from '@hanzo/ui/util'
import { CartPanel, useCommerce } from '@hanzo/commerce'

import * as Icons from '../icons'
import sendGAEvent from '../../next/analytics/google-analytics'

const DesktopBagPopup: React.FC<{
  triggerClx?: string  
  popupClx?: string
  trigger: React.ReactNode
}> = ({
  triggerClx='',
  popupClx='',
  trigger
}) => {
  const cmmc = useCommerce()

  const [bagOpen, setBagOpen] = useState<boolean>(false)
  const router = useRouter()

  useEffect(() => {
    if (bagOpen) {
      sendGAEvent('view_cart', {
        items: cmmc.cartItems.map((item) => ({
          item_id: item.sku,
          item_name: item.title,
          item_category: item.familyId,
          price: item.price,
          quantity: item.quantity
        })),
        value: cmmc.cartTotal,
        currency: 'USD',
      })
    }
  }, [bagOpen])

  return (
    <Popover open={bagOpen} onOpenChange={setBagOpen}>
      <PopoverTrigger className={triggerClx}>
        {trigger}
      </PopoverTrigger>
      <PopoverContent sideOffset={28} className={cn('relative  flex flex-col p-0 px-4 pb-4 pt-2', popupClx)}>
        <PopoverClose className='absolute z-above-content right-2 top-2 self-end hover:bg-level-3 text-muted hover:text-accent p-1 rounded-full'><X className='w-5 h-5'/></PopoverClose>
        <CartPanel 
          handleCheckout={() => {router.push('/checkout')}} 
          className='mt-4 mb-4 border-none py-0 px-4'
          listClx='rounded-sm pr-3'
          scrollAfter={5}
          scrollHeightClx='h-[70vh]'
          itemClx='mt-3'
          totalClx='sticky px-1 pr-2 -bottom-[1px] bg-level-1'
          buttonClx='max-w-[220px] flex-none'
        >
          <div className='flex flex-row items-center flex-none justify-center '>
            <Icons.bag  className='mr-2 relative w-6 h-7 fill-foreground ' />
            <p className='font-heading text-foreground text-default'>Your Bag</p>
          </div>
          <div className='h-[1px] w-pr-80 bg-muted-3 mx-auto mt-1.5 flex-none'/>
        </CartPanel>
      </PopoverContent>
    </Popover>
  )
}

export default DesktopBagPopup
