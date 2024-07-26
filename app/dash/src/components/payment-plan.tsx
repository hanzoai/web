'use client'

import React from 'react'
import { useRouter } from 'next/navigation'

import { Button } from '@hanzo/ui/primitives'
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@hanzo/ui/primitives"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@hanzo/ui/primitives"

import { usePaymentPlan } from '@/context/payment-plan-context'

const PaymentPlan: React.FC = () => {
    const { setPaymentPlan } = usePaymentPlan()
    const router = useRouter()

    const handleStartPlan = (plan: string, price: number, duration: string) => {
        setPaymentPlan({ plan, price, duration })
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
                            <Button size='sm' className='w-pr-50 min-w-20' onClick={() => handleStartPlan('Basic', 49.00, 'One Month')}>Start Plan</Button>
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
                            <Button size='sm' className='w-pr-50 min-w-20' onClick={() => handleStartPlan('Professional', 99.00, 'One Month')}>Start Plan</Button>
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
                            <Button size='sm' className='w-pr-50 min-w-20' onClick={() => handleStartPlan('Basic', 478.80, 'One Year')}>Start Plan</Button>
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
                            <Button size='sm' className='w-pr-50 min-w-20' onClick={() => handleStartPlan('Professional', 958.80, 'One Year')}>Start Plan</Button>
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