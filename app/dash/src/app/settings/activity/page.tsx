'use client'

import React, { useState, useEffect } from 'react'
import { WalletCards } from 'lucide-react'
import { useAuth } from '@hanzo/auth/service'
import { Button } from '@hanzo/ui/primitives'

import PaymentDialog from '@/components/payment-dialog'
import type { PaymentMethod } from '@/type'

const UniversalPage: React.FC = () => {
    const [userName, setUserName] = useState('MusorDMT')
    const [userEmail, setUserEmail] = useState('musordmt@proton.me')
    const [walletAddress, setWalletAddress] = useState('0x82b23c88ad897f786dff234')
    const [paymentMethod, setPaymentMethod] = useState<PaymentMethod[]>([])

    const addPaymenMethod = (method: PaymentMethod) => {
        let payment = paymentMethod
        payment.push(method)
        setPaymentMethod(payment)
    }

    const removePaymentMethod = (index: number) => {
        let payment = JSON.parse(JSON.stringify(paymentMethod))
        payment.splice(index, 1)
        setPaymentMethod(payment)
    }

    const [open, setOpen] = useState<boolean>(false)

    const auth = useAuth()

    useEffect(() => {
        if (auth.user?.displayName)
            setUserName(auth.user.displayName)
        if (auth.user?.email)
            setUserEmail(auth.user.email)
        if (auth.user?.walletAddress)
            setWalletAddress(auth.user.walletAddress)
    }, [auth])

    return (
        <div className="p-2 md:p-4 flex flex-col gap-4">
            <p className='text-xl md:text-2xl font-medium'>User Activity</p>
        </div>
    )
}

export default UniversalPage