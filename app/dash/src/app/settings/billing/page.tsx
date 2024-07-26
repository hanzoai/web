'use client'

import React from 'react'
// import { useRouter } from 'next/navigation'
// import { WalletCards } from 'lucide-react'
// import { useAuth } from '@hanzo/auth/service'
// import { usePaymentPlan } from '@/context/payment-plan-context'
import PaymentPlan from '@/components/payment-plan'

// import PaymentDialog from '@/components/payment-dialog'
// import type { PaymentMethod } from '@/type'

const UniversalPage: React.FC = () => {
    // const [paymentMethod, setPaymentMethod] = useState<PaymentMethod[]>([])

    // const addPaymenMethod = (method: PaymentMethod) => {
    //     let payment = paymentMethod
    //     payment.push(method)
    //     setPaymentMethod(payment)
    // }

    // const removePaymentMethod = (index: number) => {
    //     let payment = JSON.parse(JSON.stringify(paymentMethod))
    //     payment.splice(index, 1)
    //     setPaymentMethod(payment)
    // }

    // const [open, setOpen] = useState<boolean>(false)

    // const auth = useAuth()
    // const { setPaymentPlan } = usePaymentPlan()
    // const router = useRouter()

    // const handleStartPlan = (plan: string, price: number, duration: string) => {
    //     setPaymentPlan({plan, price, duration})
    //     router.push('/checkout')
    // }

    return (
        <div className="p-2 md:p-4 flex flex-col gap-4">
            <p className='text-xl md:text-2xl font-medium'>Payment Plan</p>
            {/* <p className='text-sm md:text-base font-normal'>Payments for domains, add-ons, and other usage are made using the default card.</p>
            <div className='border border-level-1 rounded-md flex flex-col items-center justify-center gap-8 p-8'>
                {paymentMethod.length == 0 ?
                    <>
                        <div className='h-20 w-20 border border-level-1 rounded-md flex items-center justify-center'>
                            <WalletCards size={60} strokeWidth={1.5} color='#AAAAAA' />
                        </div>
                        <div className='text-'>No payment methods added</div>
                    </>
                    :
                    paymentMethod.map((item, index) => {
                        return (
                        <div className='flex flex-row justify-between items-center text-sm font-normal w-full' key={index}>
                            <div className='flex flex-row gap-4'>
                                <div>
                                    {item.cardInfo.card.brand}
                                </div>
                                <div>
                                    Last 4 Digits: {item.cardInfo.card.last4}
                                </div>
                            </div>
                            <Button size='sm' onClick={() => removePaymentMethod(index)}>
                                Remove
                            </Button>
                        </div>
                        )
                    })
                }
            </div>
            <div className='text-sm md:text-base font-normal text-muted-2 flex flex-col md:flex-row items-center md:justify-between gap-4'>
                <p>At most, three credit cards, debit cards or prepaid cards can be added.</p>
                <Button variant='primary' size='sm' className='max-w-20' onClick={() => setOpen(true)}>Add Card</Button>
            </div> */}
            {/* <PaymentDialog open={open} setOpen={setOpen} addPaymenMethod={addPaymenMethod} /> */}
            <PaymentPlan />
        </div>
    )
}

export default UniversalPage