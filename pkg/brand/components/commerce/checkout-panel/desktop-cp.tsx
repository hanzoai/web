'use client'
import React, { type PropsWithChildren } from 'react'
import { observer } from 'mobx-react-lite'

import { ScrollArea, StepIndicator } from '@hanzo/ui/primitives'
import { AuthWidget } from '@hanzo/auth/components'
import { CartPanel, useCommerce } from '@hanzo/commerce'
import { cn } from '@hanzo/ui/util'

import { BackButton, Logo, Tooltip } from '../..'
import DesktopBagCarousel from './desktop-bag-carousel'
import LinksRow from './policy-links'
import type CheckoutPanelProps from './checkout-panel-props'

const DesktopCheckoutPanel: React.FC<PropsWithChildren & CheckoutPanelProps> = observer(({
  step,
  stepNames,
  onLeave,
  clx='',
  children
}) => {

  const cmmc = useCommerce()

  console.log("cmmc: ", cmmc)

  return ( 
    <div className={cn('grid grid-cols-2',  clx)}>
      <div key={1} className='w-full h-full bg-background flex flex-row items-start justify-end'>
        <div className='w-full h-full max-w-[750px] flex flex-col items-stretch justify-start px-8 pb-8'>
          <div key={1} className='h-[80px] grow-0 flex flex-row items-center z-10' >
            <Logo size='md' href='/' onClick={onLeave} layout='text-only' className='logo-outer-tooltip-class' />
            <Tooltip select='.logo-outer-tooltip-class' text='home' position='right' offset={6}/>
          </div>
          <BackButton 
            size='sm' 
            clx={
              'z-10 w-10 !px-0 aspect-square ' + 
              'rounded-full hover:!bg-level-3 ' + 
              'back-button-tooltip-class '
            }
            onBack={onLeave}
          />
          <Tooltip  select='.back-button-tooltip-class' text='back' position='right' offset={5}/>
          <div key={2} className={cn(
            'w-full grow min-h-0 max-w-[550px] mx-auto flex flex-col gap-3',
            'justify-start gap-10 pt-10'
          )}>
            {/* <DesktopBagCarousel className='grow-0 h-[260px] w-[360px] lg:w-[420px] mx-auto -mt-8' constrainTo={{w: 250, h: 250}}/> */}
            <CartPanel 
              className='w-full border-none p-0' 
              itemClx='mb-2' 
              totalClx='sticky bottom-0 bg-background'
              listClx='pr-3'
              scrollAfter={4}
              scrollHeightClx='min-h-[50vh] grow'
              showPromoCode
              showShipping
              selectItems
            />
          </div>
        </div>
      </div>
      <div key={2} className='w-full h-full flex flex-col bg-level-1 min-h-screen justify-between'>
        <ScrollArea className='w-full flex flex-row items-start justify-start overflow-y-auto'>
          <div className='h-full w-full max-w-[750px] relative flex flex-col items-center px-8 pt-0'>
            <div key={1} className='bg-level-1 sticky h-[80px] bg-[#aaaaff] w-full top-0 flex justify-center items-end'>
              <AuthWidget noLogin className='hidden md:flex absolute top-4 right-4 '/>
              <StepIndicator dotSizeRem={1.35} steps={stepNames} currentStep={step} className='gap-2 text-base w-full' />
            </div>
            <div key={2} className='w-full max-w-[550px] mx-auto p-8 px-0'>
              {children}
            </div>
          </div>
        </ScrollArea>
        <div className='w-full max-w-[750px] relative flex flex-col items-center px-8 pt-0'>
          <div className='w-full max-w-[550px] mx-auto flex flex-col items-center'>
            <LinksRow clx='w-full' />
          </div>
        </div>
      </div>
    </div>
  )
})

export default DesktopCheckoutPanel