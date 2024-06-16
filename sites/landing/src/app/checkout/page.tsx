'use client'
import React from 'react'
import { useRouter } from 'next/navigation'

import { cn } from '@hanzo/ui/util'
import { CheckoutPanel, Main } from '@hanzo/brand'

const Page: React.FC = () => {

  const router = useRouter()

  const handleCheckoutDone = () => {
    router.back()
  }

  return (
    <Main id='CHECKOUT_MAIN' className={cn(
      '!px-0 !py-0',
      'w-full h-[100vh]',
      'animate-in md:zoom-in-90',
      'shadow-lg bg-background'
    )}>
      <CheckoutPanel close={handleCheckoutDone} className='w-full h-full' />
    </Main>
  )
}

export default Page