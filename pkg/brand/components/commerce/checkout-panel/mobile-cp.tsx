'use client'
import React, { type PropsWithChildren } from 'react'

import { StepIndicator } from '@hanzo/ui/primitives'
import { cn } from '@hanzo/ui/util'
import { AuthWidget } from '@hanzo/auth/components'

import { BackButton, Logo } from '../..'
import PolicyLinks from './policy-links'
import type CheckoutPanelProps from './checkout-panel-props'


const MobileCheckoutPanel: React.FC<PropsWithChildren & CheckoutPanelProps> = ({
  step,
  stepNames,
  onLeave,
  clx='',
  children
}) => (

  <div /* id='MOBILE_GRID' */ className={cn('bg-background flex flex-col justify-start px-4 pt-[101px]', clx)}>
    <div className='fixed z-11 top-0 h-[45px] w-full flex justify-between items-stretch bg-background'>
      <div className='flex items-stretch gap-1 grow-0'>
        <BackButton 
          size='sm' 
          clx={
            '-ml-5 !px-0 aspect-square h-full ' + 
            'rounded-full active:!bg-level-3 ' 
          }
          onBack={onLeave}
        />
        <Logo size='xs' layout='text-only' href='/' onClick={onLeave} className='-ml-2'/>
      </div>
      <StepIndicator 
        dotSizeRem={1} 
        steps={stepNames} 
        currentStep={step} 
        className='relative grow mx-2 top-[14px] text-xs font-semibold w-full' 
      />

      {/* 72px by observation (for centering).  Need wrapper div since 'noLogin' returns null if no logged in user */}
      <div className='w-[72px] grow-0 shrink-0 flex items-center justify-center'><AuthWidget noLogin className=''/></div>
    </div>
    {children}
    <PolicyLinks clx='mt-auto mb-3 pt-2' />
  </div>
)

export default MobileCheckoutPanel