'use client'

import type { Dispatch, SetStateAction } from 'react'
import { useState } from 'react'
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@hanzo/ui/primitives"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@hanzo/ui/primitives"
import { PaymentForm, CreditCard } from 'react-square-web-payments-sdk-fixed';
import type { PaymentDialogProps } from '@/type'

export default function PaymentDialog({ ...props }: PaymentDialogProps) {
    const handleCloseButtonClick = () => {
        props.setOpen(false)
    }

    return (
        <Dialog open={props.open} onOpenChange={props.setOpen}>
            <DialogContent className="sm:max-w-[600px] bg-background border border-level-3 p-4 gap-4 overflow-hidden">
                <DialogHeader>
                    <DialogTitle className='!text-3xl !font-semibold !p-2'>Add a Card</DialogTitle>
                </DialogHeader>
                <PaymentForm
                    applicationId='sandbox-sq0idb-yCZrysTolh0q13yEhkLunA'
                    cardTokenizeResponseReceived={
                        async (token, verifiedBuyer) => {
                            console.log('THis is square token: ', token)
                            console.log('Verified Buyer: ', verifiedBuyer)
                            if (token) {
                                handleCloseButtonClick()
                                props.addPaymenMethod({
                                    cardInfo: token.details,
                                    token: token.token
                                })
                            } else {
                                console.log('Payment Method Error')
                            }
                        }
                    }
                    locationId='L91Q5K038GFYX'
                >
                    <CreditCard
                        render={(Button: any) =>
                            <div className='flex flex-row justify-between'>
                                <Button className='!bg-level-1 !text-primary !w-30 !border-solid !border !border-level-3' onClick={handleCloseButtonClick}>Cancel</Button>
                                <Button type='submit' className='!bg-primary !w-30 !text-background'>Continue</Button>
                            </div>}
                        callbacks={{ submit(event) { console.info(event) } }}
                        style={{
                            input: {
                                backgroundColor: 'black',
                                color: 'white'
                            },
                            'input::placeholder': {
                                color: 'white',
                            },
                        }}
                    />
                    {/* <div className="flex flex-col gap-6 p-6 bg-level-1 rounded-t-lg border-t border-level-3">
                        <div className='text-base font-medium'>Add a payment method for</div>
                        <div className='flex flex-row gap-4 text-sm font-medium text-muted-2'>
                            <div className='flex-[50%] flex flex-col gap-2'>
                                <div>Card Number</div>
                                <Input
                                    className='bg-background'
                                    placeholder='1234 1234 1234 1234'
                                    type='text'
                                    id='card-number'
                                    name='card-number'
                                    value={cardNumber}
                                    required
                                    onChange={(e) => handleCardNumberChange(e.target.value)}
                                />
                            </div>
                            <div className='flex-[25%] flex flex-col gap-2'>
                                <div>Expires</div>
                                <Input
                                    className='bg-background'
                                    placeholder='MM/YY'
                                    type='text'
                                    id='expiration-date'
                                    name='expiration-date'
                                    value={expireDate}
                                    required
                                    onChange={(e) => handleExpireDateChange(e.target.value)}
                                />
                            </div>
                            <div className='flex-[25%] flex flex-col gap-2'>
                                <div>CVC</div>
                                <Input
                                    className='bg-background'
                                    placeholder='CVC'
                                    type='text'
                                    id='cvc'
                                    name='cvc'
                                    value={cvc}
                                    required
                                    onChange={(e) => handleCVCChange(e.target.value)}
                                />
                            </div>
                        </div>
                    </div> */}
                </PaymentForm>
                
            </DialogContent>
        </Dialog>
    )
}