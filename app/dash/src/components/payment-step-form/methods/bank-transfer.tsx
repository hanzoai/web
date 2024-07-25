'use client'

import React from 'react'
import { Copy } from 'lucide-react'

import { Button, toast } from '@hanzo/ui/primitives'

import type { PaymentMethodComponentProps } from '@/type'

import ContactForm from '../contact-form'

const InfoField: React.FC<{
  label: string,
  value: React.ReactNode,
  copyValue: string
}> = ({
  label,
  value,
  copyValue
}) => {

  const copyToClipboard = (label: string, text: string) => {
    navigator.clipboard.writeText(text)
    toast(`${label} copied to clipboard.`)
  }

  return (
    <div className='flex flex-col gap-1'>
      <p className='text-xs'>{label}</p>
      <div className='flex items-center justify-between sm:text-lg border rounded-lg py-2 px-4'>
        {value}
        <Button variant='ghost' size='icon' onClick={() => copyToClipboard(label, copyValue)}>
          <Copy className='h-4 w-4'/>
        </Button>
      </div>
    </div>
  )
}

const PayWithBankTransfer: React.FC<PaymentMethodComponentProps> = ({
  onDone,
  storePaymentInfo,
  contactForm
}) => {

  const payByBankTransfer = async () => {
    contactForm.handleSubmit( async () => {
      // await storePaymentInfo({paymentMethod: 'bank-transfer'})
      onDone()
    })()
  }

  return (
    <div className='flex flex-col gap-2 mt-6'>
      <ContactForm form={contactForm}/>
      <div className='w-full mx-auto max-w-[50rem]'>
        <div className='flex flex-col gap-4 w-full'>
          <InfoField
            label='Beneficiary Bank'
            value={<div>Bank of America<br/>NA 222 Broadway<br/>New York, New York. 10038</div>}
            copyValue='Bank of America, NA 222 Broadway, New York, New York. 10038'
          />
          <InfoField
            label='Beneficiary'
            value={<div>Hanzo, Inc<br/>4811 Mastin Street<br/>Merriam, KS 66203</div>}
            copyValue='Hanzo, Inc, 4811 Mastin Street, Merriam, KS 66203'
          />
          <InfoField label='Routing Number - ACH' value='113000023 / 111000025' copyValue='113000023 / 111000025'/>
          <InfoField label='Routing Number - Wire' value='026009593' copyValue='026009593'/>
          <InfoField label='Routing Number - SWIFT' value='BOFAUS3N' copyValue='BOFAUS3N'/>
          <InfoField label='Reference' value='Lux' copyValue='Lux'/>
        </div>
      </div>
      <Button onClick={payByBankTransfer} className='mx-auto w-full mt-4'>Continue</Button>
    </div>
  )
}

export default PayWithBankTransfer
