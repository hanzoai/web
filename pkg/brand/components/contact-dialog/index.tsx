'use client'

import React, { useState } from 'react'

import type { ButtonModalProps} from '@hanzo/ui/types'

import {
  Button,
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@hanzo/ui/primitives'

import ContactForm from './contact-form'
import Disclaimer from './disclaimer'

const ContactDialog: React.FC<ButtonModalProps> = ({
  open,
  onOpenChange,
  buttonText,
  buttonProps,
  title,
  byline,
  action,
  actionEnclosure
}) => {
  const [success, setSuccess] = useState(false)

  const onSubmit = async (formData: any, enclosure: any) => {
    const result = await action(formData, enclosure)
    if (result.success) {
      setSuccess(true)
    }
  }
  
  return (
    <Dialog open={open} onOpenChange={onOpenChange} >
      <DialogTrigger asChild>
        <Button {...buttonProps} >{buttonText}</Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[500px] p-0 gap-0 bg-background border">
        <DialogHeader className='py-6 text-foreground'>
          <DialogTitle className='text-4xl text-center text-inherit'>{title}</DialogTitle>
          {byline && (<DialogDescription className='text-inherit text-lg text-center'>{byline} </DialogDescription>)}
        </DialogHeader>
        <div className='px-8 pb-8 rounded-e-lg flex flex-col justify-start items-center'>
          {success ? (
            <p>{actionEnclosure?.reply}</p>
          ) : (
            <ContactForm onSubmit={onSubmit} enclosure={actionEnclosure}/>
          )}
          <div className='text-muted-1 text-xs mt-4' >
            <Disclaimer />
          </div>
        </div>
      </DialogContent>
    </Dialog>
  )
}

export default ContactDialog
