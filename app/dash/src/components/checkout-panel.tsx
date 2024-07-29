'use client'
import React, { type PropsWithChildren } from 'react'

import { ScrollArea, StepIndicator } from '@hanzo/ui/primitives'
import { AuthWidget } from '@hanzo/auth/components'
import PolicyLinks from './policy-links'

import { BackButton, Logo, Tooltip } from '@hanzo/brand'
import type CheckoutPanelProps from '@/type'
import { usePaymentPlan } from '@/context/payment-plan-context'

const DesktopCheckoutPanel: React.FC<PropsWithChildren & CheckoutPanelProps> = ({
    step,
    stepNames,
    onLeave,
    clx = '',
    children
}) => {
    const { paymentPlan } = usePaymentPlan()

    return (
        <div className='w-full h-full grid grid-cols-1 md:grid-cols-2'>
            <div className='w-full h-full bg-background hidden md:flex flex-col items-start justify-start'>
                <div className='h-[80px] grow-0 flex flex-row items-center px-4' >
                    <Logo size='md' href='/' onClick={onLeave} layout='text-only' className='logo-outer-tooltip-class' />
                    <Tooltip select='.logo-outer-tooltip-class' text='home' position='right' offset={6} />
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
                <Tooltip select='.back-button-tooltip-class' text='back' position='right' offset={5} />
                <div className='w-full h-full mx-auto max-w-[700px] flex flex-col justify-center items-center gap-8 px-2 mt-8'>
                    {/* <PaymentPlan /> */}
                    <div className='w-full grid grid-cols-2 gap-4'>
                        <div className='text-right'>Plan:</div>
                        <div>{paymentPlan?.plan}</div>
                        <div className='text-right'>Price:</div>
                        <div>${paymentPlan?.price}</div>
                        <div className='text-right'>Duration:</div>
                        <div>{paymentPlan?.duration}</div>
                    </div>
                </div>
            </div>
            <div className='w-full h-full flex flex-col bg-level-1 min-h-screen justify-between gap-4'>
                <div className='px-8 pt-4'>
                    <div className='flex md:hidden flex-row items-center justify-between gap-4'>
                        <BackButton
                            size='sm'
                            clx={
                                'z-10 w-10 !px-0 aspect-square ' +
                                'rounded-full hover:!bg-level-3 ' +
                                'back-button-tooltip-class '
                            }
                            onBack={onLeave}
                        />
                        <div className='items-center text-sm font-light truncate'>
                            <div>{paymentPlan?.plan}, {paymentPlan?.duration}: ${paymentPlan?.price}</div>
                        </div>
                    </div>
                </div>
                <ScrollArea className='w-full flex flex-row items-start justify-start overflow-y-auto'>
                    <div className='h-full w-full max-w-[750px] relative flex flex-col items-center px-8 pt-0'>
                        <div className='bg-level-1 sticky h-[80px] bg-[#aaaaff] w-full top-0 flex justify-center items-end'>
                            <AuthWidget noLogin className='hidden md:flex absolute top-4 right-4 ' />
                            <StepIndicator dotSizeRem={1.35} steps={stepNames} currentStep={step} className='gap-2 text-base w-full' />
                        </div>
                        <div className='w-full max-w-[550px] mx-auto p-8 px-0'>
                            {children}
                        </div>
                    </div>
                </ScrollArea>
                <div className='w-full max-w-[750px] relative flex flex-col items-center px-8 pt-0'>
                    <div className='w-full max-w-[550px] mx-auto flex flex-col items-center'>
                        <PolicyLinks clx='w-full' />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default DesktopCheckoutPanel