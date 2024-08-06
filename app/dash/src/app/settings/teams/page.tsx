'use client'

import React, { useState, useEffect } from 'react'
import { useRouter } from 'next/navigation'
import { useOrganization } from '@/context/organization-context'
import { useAuth } from '@hanzo/auth/service'
import { CircleEllipsis, Router } from 'lucide-react'
import { Button, Popover, PopoverContent, PopoverTrigger, } from '@hanzo/ui/primitives'

import { leaveTeam } from '@/utils/firebase-utils'
import CreateTeamDialog from '@/components/create-team'
import LeaveTeamDialog from '@/components/leave-team'

const UniversalPage: React.FC = () => {
    const [userName, setUserName] = useState('MusorDMT')
    const [userEmail, setUserEmail] = useState('musordmt@proton.me')
    const [walletAddress, setWalletAddress] = useState('0x82b23c88ad897f786dff234')
    
    const [openCreateTeamDialog, setOpenCreateTeamDialog] = useState(false)
    const [openLeaveTeamDialog, setOpenLeaveTeamDialog] = useState(false)

    const org = useOrganization()
    const auth = useAuth()
    const router = useRouter()

    useEffect(() => {
        if (!auth) return

        if (auth.user?.displayName)
            setUserName(auth.user.displayName)
        if (auth.user?.email)
            setUserEmail(auth.user.email)
        if (auth.user?.walletAddress)
            setWalletAddress(auth.user.walletAddress)
    }, [auth])

    const handleViewClick = (id: string, role: string) => {
        router.push(`/organization/${id}`)
    }

    return (
        <div className="p-2 md:p-4 flex flex-col gap-4">
            <div className='flex flex-row justify-between'>
                <p className='text-xl md:text-2xl font-medium'>Teams</p>
                <Button size='sm' onClick={() => setOpenCreateTeamDialog(true)}>Create Team</Button>
                <CreateTeamDialog open={openCreateTeamDialog} setOpen={setOpenCreateTeamDialog} />
            </div>
            <p className='text-sm md:text-base'>The teams that are associated with your Vercel account</p>
            {org.organization?.length !== 0 ?
                <div className='flex flex-col mt-8 border rounded-md border-level-3'>
                    {
                        org.organization?.map((item, index) => {
                            if (org.organization?.length === 0) return
                            const length = org.organization?.length ?? 0
                            return (
                                <div key={item.id} className={`flex flex-row justify-between p-2 items-center ${index !== length - 1 ? 'border-b border-level-3' : ''}`}>
                                    <div className='flex flex-row gap-2 items-center'>
                                        <img src="/assets/images/01.png" className="aspect-square rounded-full h-[30px] w-[30px]" alt="profile" />
                                        <div className='flex flex-col gap-1'>
                                            <p className='text-lg md:text-base font-medium'>{item.name}</p>
                                            <p className='text-sm md:text-sm capitalize'>{item.role}</p>
                                        </div>
                                    </div>
                                    <Popover>
                                        <PopoverTrigger asChild>
                                            <CircleEllipsis strokeWidth={1.5} size={20} className='hover:cursor-pointer' />
                                        </PopoverTrigger>
                                        <PopoverContent className='bg-level-0 mr-10 !p-2 text-sm text-primary font-light border-level-1 w-fit flex flex-col'>
                                            <div className='hover:cursor-pointer hover:bg-level-3 p-2 rounded-sm text-sm' onClick={() => handleViewClick(item.id, item.role)}>View</div>
                                            <div className='hover:cursor-pointer hover:bg-level-3 p-2 rounded-sm text-sm' onClick={() => setOpenLeaveTeamDialog(true)}>Leave Team</div>
                                        </PopoverContent>
                                    </Popover>
                                    <LeaveTeamDialog id={item.id} name={item.name} open={openLeaveTeamDialog} setOpen={setOpenLeaveTeamDialog} />
                                </div>
                            )
                        })
                    }
                </div>
                :
                <></>
            }
        </div>
    )
}

export default UniversalPage