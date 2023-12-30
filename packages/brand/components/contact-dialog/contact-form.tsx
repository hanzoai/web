'use client'

import React, { useTransition } from 'react'

import { useForm, type SubmitHandler, type ControllerRenderProps } from 'react-hook-form'
import { z } from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'

  // @ts-ignore
import validator from 'validator'

import { Loader2 } from 'lucide-react'

import {
  Button,
  Input,
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from '@hanzo/ui/primitives'

import type { SubmitServerAction } from '@hanzo/ui/types'
import type { ContactInfo } from '../../types'

const ContactFormSchema = z.object({
  email: z
    .string()
    .min(1, { message: "Email must be provided." })
    .email("Invalid email."),
  phone: z
    .string()
    .min(1, { message: "Telephone must be provided." })
    .refine(validator.isMobilePhone, { message: "Invalid format." })
})

type ContactFormSchemaType = z.infer<typeof ContactFormSchema>

const ContactForm: React.FC<{
  onSubmit: (data: ContactFormSchemaType, enc: any) => void
  enclosure: any
}> = ({
  onSubmit: _onSubmit,
  enclosure
}) => {

  const form = useForm<ContactFormSchemaType>({
    resolver: zodResolver(ContactFormSchema),
    defaultValues: {
      email: '',
      phone: '',
    },
  })

  const [isPending, startTransition] = useTransition()

  const onSubmit: SubmitHandler<ContactFormSchemaType> = (data) => {
    // https://github.com/orgs/react-hook-form/discussions/10757#discussioncomment-6672403
    // @ts-ignore
    startTransition(async () => {
      await _onSubmit(data, enclosure)
    })
  }

  const MyFormItem: React.FC<{ 
    field: ControllerRenderProps<ContactFormSchemaType, 'email'> | ControllerRenderProps<ContactFormSchemaType, 'phone'>  
    placeholder: string
  }> = ({
    field,
    placeholder
  }) => (
  <FormItem className="space-y-0" >
    <FormControl>
      <Input placeholder={placeholder} {...field} className="mt-0 text-foreground"/>
    </FormControl>
    <div className="flex flex-row justify-start items-stretch gap-2">
      <FormMessage />
    </div>
  </FormItem>
)

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="w-3/4">
        <div className='flex flex-col justify-start items-stretch mt-4'>
        <FormField
          control={form.control}
          name='email'
          render={({ field }) => ( <MyFormItem field={field} placeholder='email'/> )}
        />
        <FormField
          control={form.control}
          name='phone'
            // @ts-ignore
          render={({ field }) => ( <MyFormItem field={field} placeholder='phone'/> )}
        />
          <Button disabled={isPending} type='submit' className='bg-primary text-primary-fg hover:bg-primary-hover'>
            {isPending ? (<>
              <Loader2 className="mr-2 h-4 w-4 animate-spin" />
              Please wait
              </>
            ) : (
              <>Submit</>
            )}
          </Button>
        </div>
      </form>
    </Form>
  )
}

export default ContactForm
