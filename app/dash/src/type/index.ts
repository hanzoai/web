import type { Dispatch, SetStateAction } from 'react'

import type { ComponentType } from 'react'
import type { UseFormReturn } from 'react-hook-form'

type TransactionStatus = 'unpaid' | 'paid' | 'confirmed' | 'error'

interface CheckoutStepComponentProps {
  onDone: () => void
  orderId: string | undefined
  setOrderId: (orderId: string | undefined) => void
}

interface CheckoutStep {
  name: string  
  label?: string 
  Comp: ComponentType<CheckoutStepComponentProps>
}

type ContactFormType = UseFormReturn<{
  name: string
  email: string
}, any, {
  name: string
  email: string
}>

interface PaymentMethodComponentProps {
  onDone: () => void
  transactionStatus: TransactionStatus
  setTransactionStatus: (status: TransactionStatus) => void
  storePaymentInfo: (paymentInfo: any) => Promise<void>
  contactForm: ContactFormType
}

interface PaymentMethodDesc {
  value: string  
  label: string 
  Comp: ComponentType<PaymentMethodComponentProps>
}

interface CheckoutPanelProps {
    step: number
    stepNames: string[]
    onLeave: () => void
    clx?: string
}

interface CountryProps {
    id: number
    alpha2: string
    alpha3: string
    name: string
}

export type PaymentDialogProps = {
    open: boolean
    setOpen: Dispatch<SetStateAction<boolean>>
    addPaymenMethod: (arg: PaymentMethod) => void
}

export type PaymentMethod = {
    cardInfo: any
    token: string | undefined
}

export {
    type CheckoutPanelProps as default,
    type TransactionStatus,
    type CheckoutStepComponentProps,
    type CheckoutStep,
    type PaymentMethodComponentProps,
    type PaymentMethodDesc,
    type ContactFormType,
    type CountryProps,
}