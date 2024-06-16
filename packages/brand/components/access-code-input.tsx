'use client'

import { useState } from 'react'
import { InputOTP, InputOTPGroup, InputOTPSeparator, InputOTPSlot } from '@hanzo/ui/primitives'
import { cn } from '@hanzo/ui/util'

const AccessCodeInput: React.FC<{
  onSuccess?: () => void
  onFail?: () => void
  validCodes?: string[]
  className?: string
}> = ({
  onSuccess,
  onFail,
  validCodes,
  className
}) => {
  const [status, setStatus] = useState<'valid' | 'invalid' | 'checking' | undefined>()

  const checkAccessCode = (code: string) => {
    setStatus(undefined)
    if (code.length === 6) {
      setStatus('checking')
      setTimeout(() => {
        if (validCodes?.includes(code) && onSuccess) {
          setStatus('valid')
          onSuccess()
        }
        else {
          setStatus('invalid')
          onFail && onFail()
        }
      }, 1000)
    }
  }

  return (
    <div className={cn('flex flex-col gap-2 mx-auto w-full text-center items-center', className)}>
      <InputOTP
        className='mx-auto'
        maxLength={6}
        onInput={(event) => checkAccessCode((event.target as HTMLInputElement).value)}
        render={({ slots }) => (
          <>
            <InputOTPGroup>
              {slots.slice(0, 3).map((slot, index) => (
                <InputOTPSlot key={index} {...slot} />
              ))}{" "}
            </InputOTPGroup>
            <InputOTPSeparator />
            <InputOTPGroup>
              {slots.slice(3).map((slot, index) => (
                <InputOTPSlot key={index + 3} {...slot} />
              ))}
            </InputOTPGroup>
          </>
        )}
      />
      <p className='h-[3rem]'>
        {
          status === 'checking' ? 'Checking access code...' :
          status === 'invalid' ? <span className='text-destructive'>Invalid access code!</span> :
          status === 'valid' ? <span>Access code is valid! Redirecting...</span> :
          null
        }
      </p>
    </div>
  )
}

export default AccessCodeInput
