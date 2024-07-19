'use client'

import React, { useState, useEffect } from 'react'
import { useAuth } from '@hanzo/auth/service'


const UniversalPage: React.FC = () => {
    const [userName, setUserName] = useState('MusorDMT')
    const [userEmail, setUserEmail] = useState('musordmt@proton.me')
    const [walletAddress, setWalletAddress] = useState('0x82b23c88ad897f786dff234')
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
        <div className="p-4 w-full flex flex-col gap-4">
            Account Settings
        </div>
    )
}

export default UniversalPage