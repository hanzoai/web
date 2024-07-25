'use client'

import React, { useLayoutEffect, useRef, useState } from 'react'
import { useRouter } from 'next/navigation'

import { capitalize, cn } from '@hanzo/ui/util'
import { Main } from '@hanzo/brand'

import PaymentStepForm from '@/components/payment-step-form'
import ThankYou from '@/components/thank-you'
import CheckoutPanel from '@/components/checkout-panel'
import type { CheckoutStep } from '@/type'

import { usePaymentPlan } from '@/context/payment-plan-context'

/**
 * An array of checkout steps, each with a name, optional label, and a corresponding component.
 * This array defines the order and configuration of the checkout process.
 */
const STEPS = [
  {
    name: 'payment',
    Comp: PaymentStepForm
  },
  {
    name: 'done',
    label: 'Done!',
    Comp: ThankYou
  }
] satisfies CheckoutStep[]

const STEP_NAMES = STEPS.map((s) => (s.label ? s.label : capitalize(s.name)))

const Page: React.FC = () => {
  const [stepIndex, setStepIndex] = useState<number>(0)
  const [orderId, setOrderId] = useState<string | undefined>(undefined)

  const plan = usePaymentPlan()
  const router = useRouter()

  if (!plan) {
    console.log("CHECKOUT PAGE:  payment plan context is null")
    return (<></>)
  } else if(!plan.paymentPlan?.plan) {
    console.log("CHECKOUT PAGE:  payment plan is null")
    router.push('/settings/billing')
  }

  // Step.name or 'first' or 'next' or 'last' 
  const setStep = (name: string): void => {

    if (name === 'first') {
      setStepIndex(0)
    }
    else if (name === 'last') {
      setStepIndex(STEPS.length - 1)
    }
    else if (name === 'next') {
      if (stepIndex <= STEPS.length - 2) {
        setStepIndex(stepIndex + 1)
      }
      else {
        throw new Error('CheckoutPanel.setStep(): Attempting to advance past last step!')
      }
    }
    else {
      const indexFound = STEPS.findIndex((el) => (el.name === name))
      if (indexFound !== -1) {
        setStepIndex(indexFound)
      }
      else {
        throw new Error('CheckoutPanel.setStep(): Step named ' + name + ' not found!')
      }
    }
  }

  const _close = () => {
    setStep('first')
  }

  // Determine if mobile or desktop layout based on visibility of desktopElement
  // This prevents issues with multiple instances of 3rd party e-commerce widgets 
  // from ever being in the DOM.
  // https://stackoverflow.com/a/21696585/11378853
  const desktopElement = useRef<HTMLDivElement | null>(null)
  const [layout, setLayout] = useState<'mobile' | 'desktop' | undefined>(undefined)

  useLayoutEffect(() => {
    const checkLayout = () => {
      setLayout(!!desktopElement.current?.offsetParent ? 'desktop' : 'mobile')
    }

    // initial layout check
    checkLayout()

    window.addEventListener('resize', checkLayout)
    return () => {
      window.removeEventListener('resize', checkLayout)
    }
  }, [])

  const StepToRender = STEPS[stepIndex].Comp

  return (
    <Main id='CHECKOUT_MAIN' className={cn(
      '!px-0 !py-0',
      'w-full h-[100vh]',
      'animate-in md:zoom-in-90',
      'shadow-lg bg-background'
    )}>
        <CheckoutPanel
          onLeave={_close}
          step={stepIndex}
          stepNames={STEP_NAMES}
        >
          <div ref={desktopElement} />
          {layout === 'desktop' && <StepToRender onDone={() => { setStep('next') }} orderId={orderId} setOrderId={setOrderId} />}
        </CheckoutPanel>
    </Main>
  )
}

export default Page