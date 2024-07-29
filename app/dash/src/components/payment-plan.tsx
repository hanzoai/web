'use client'

import React, { useState, useEffect } from 'react'
import { useRouter } from 'next/navigation'

import { Button } from '@hanzo/ui/primitives'
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@hanzo/ui/primitives"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@hanzo/ui/primitives"

import { useAuth } from '@hanzo/auth/service'

import { usePaymentPlan } from '@/context/payment-plan-context'

const PaymentPlan: React.FC = () => {
    const auth = useAuth()
    const plan = usePaymentPlan()
    const router = useRouter()

    const [currentPlan, setCurrentPlan] = useState<string>('')

    useEffect(() => {
        initPlan()
    }, [plan, auth])

    const initPlan = async () => {
        const customerInfo = await plan.getCustomer(auth.user?.email)
        if (customerInfo) {
            setCurrentPlan(customerInfo.plan)
        }
    }

    const handleBasicMonth = () => {
        plan.setPaymentPlan({ plan: 'Basic', price: 4900, duration: 'One Month', planId: 'ZOJSPCIE66FICPBO6ABKGB76', planVariationId: '5V36UZ5UDYGEZ5ZGWRMI4WG3' })
        router.push('/checkout')
    }

    const handleBasicAnnual = () => {
        plan.setPaymentPlan({ plan: 'Basic', price: 47880, duration: 'One Year', planId: 'KGJYVX4TWGEVYKMROICXWEHG', planVariationId: 'KLXH7QKZTBA4CZE4KN4RSXRK' })
        router.push('/checkout')
    }

    const handleProMonth = () => {
        plan.setPaymentPlan({ plan: 'Professional', price: 9900, duration: 'One Month', planId: 'GAIZ5PU2O47MQCXPIKHLWVMF', planVariationId: 'PBLWP3CUXO6G7HWMHEJHL4HE' })
        router.push('/checkout')
    }

    const handleProAnnual = () => {
        plan.setPaymentPlan({ plan: 'Professional', price: 95880, duration: 'One Year', planId: 'I6L2KM65MCFHIS4WJIQML2T5', planVariationId: '5NJUWHX3WQXGVCUO4LDJW4R3' })
        router.push('/checkout')
    }

    return (
        <Tabs defaultValue='monthly' className='w-full flex flex-col justify-center items-center'>
            <TabsList className='grid w-pr-50 min-w-96 grid-cols-2 bg-level-1 self-center'>
                <TabsTrigger value="monthly">Monthly Plan</TabsTrigger>
                <TabsTrigger value="annual">Annual Plan</TabsTrigger>
            </TabsList>
            <TabsContent value="monthly" className='w-full flex flex-row gap-4 mt-4'>
                <Card className='w-full text-center border-level-1'>
                    <CardHeader className='border-level-1 flex flex-col gap-4'>
                        <CardTitle className='text-center text-lg lg:text-xl font-normal uppercase'>Basic</CardTitle>
                        <CardDescription className='flex flex-col gap-2 justify-center items-center'>
                            <div className='flex flex-row gap-4 justify-center items-center'>
                                <div className='text-2xl lg:text-4xl font-bold'>$49.00</div>
                                <div className='text-sm lg:text-base font-light truncate'>per month</div>
                            </div>
                            {currentPlan === 'ZOJSPCIE66FICPBO6ABKGB76' ?
                                <Button size='sm' className='w-pr-50 min-w-20' variant='outline'>Current Plan</Button> :
                                <Button size='sm' className='w-pr-50 min-w-20' onClick={handleBasicMonth}>Start Plan</Button>
                            }
                        </CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-2">
                        <div className="space-y-1">
                            Basic Plan
                        </div>
                    </CardContent>
                </Card>
                <Card className='w-full text-center border-level-1'>
                    <CardHeader className='border-level-1 flex flex-col gap-4'>
                        <CardTitle className='text-center text-lg lg:text-xl font-normal uppercase'>Professional</CardTitle>
                        <CardDescription className='flex flex-col gap-2 justify-center items-center'>
                            <div className='flex flex-row gap-4 justify-center items-center'>
                                <div className='text-2xl lg:text-4xl font-bold'>$99.00</div>
                                <div className='text-sm lg:text-base font-light truncate'>per month</div>
                            </div>
                            {currentPlan === 'GAIZ5PU2O47MQCXPIKHLWVMF' ?
                                <Button size='sm' className='w-pr-50 min-w-20' variant='outline'>Current Plan</Button> :
                                <Button size='sm' className='w-pr-50 min-w-20' onClick={handleProMonth}>Start Plan</Button>
                            }
                        </CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-2">
                        <div className="space-y-1">
                            Professional Plan
                        </div>
                    </CardContent>
                </Card>
            </TabsContent>
            <TabsContent value="annual" className='w-full flex flex-row gap-4 mt-0'>
                <Card className='w-full text-center border-level-1'>
                    <CardHeader className='border-level-1 flex flex-col gap-4'>
                        <CardTitle className='text-center text-lg lg:text-xl font-normal uppercase'>Basic</CardTitle>
                        <CardDescription className='flex flex-col gap-2 justify-center items-center'>
                            <div className='flex flex-row gap-4 justify-center items-center'>
                                <div className='text-2xl lg:text-4xl font-bold'>$39.90</div>
                                <div className='text-sm lg:text-base font-light truncate'>per month</div>
                            </div>
                            <div className='flex flex-row gap-4 justify-center items-center text-sm lg:text-base'>
                                <div className='font-medium'>$478.80</div>
                                <div className='font-light truncate'>billed annually</div>
                            </div>
                            {currentPlan === 'KGJYVX4TWGEVYKMROICXWEHG' ?
                                <Button size='sm' className='w-pr-50 min-w-20' variant='outline'>Current Plan</Button> :
                                <Button size='sm' className='w-pr-50 min-w-20' onClick={handleBasicAnnual}>Start Plan</Button>
                            }
                        </CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-2">
                        <div className="space-y-1">
                            Basic Plan
                        </div>
                    </CardContent>
                </Card>
                <Card className='w-full text-center border-level-1'>
                    <CardHeader className='border-level-1 flex flex-col gap-4'>
                        <CardTitle className='text-center text-lg lg:text-xl font-normal uppercase'>Professional</CardTitle>
                        <CardDescription className='flex flex-col gap-2 justify-center items-center'>
                            <div className='flex flex-row gap-4 justify-center items-center'>
                                <div className='text-2xl lg:text-4xl font-bold'>$79.90</div>
                                <div className='text-sm lg:text-base font-light truncate'>per month</div>
                            </div>
                            <div className='flex flex-row gap-4 justify-center items-center text-sm lg:text-base'>
                                <div className='font-medium'>$958.80</div>
                                <div className='font-light truncate'>billed annually</div>
                            </div>
                            {currentPlan === 'I6L2KM65MCFHIS4WJIQML2T5' ?
                                <Button size='sm' className='w-pr-50 min-w-20' variant='outline'>Current Plan</Button> :
                                <Button size='sm' className='w-pr-50 min-w-20' onClick={handleProAnnual}>Start Plan</Button>
                            }
                        </CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-2">
                        <div className="space-y-1">
                            Professional Plan
                        </div>
                    </CardContent>
                </Card>
            </TabsContent>
        </Tabs>
    )
}

export default PaymentPlan