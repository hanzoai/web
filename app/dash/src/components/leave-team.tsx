'use client'

import { useState, useEffect } from 'react'
import type { Dispatch, SetStateAction } from 'react'
import { Input, Button, Dialog, DialogContent, DialogTitle, DialogFooter } from '@hanzo/ui/primitives'

import { leaveTeam } from '@/utils/firebase-utils'
import { useOrganization } from '@/context/organization-context'
import { useAuth } from '@hanzo/auth/service'

type ModalProps = {
    id: string
    name: string
    open: boolean
    setOpen: Dispatch<SetStateAction<boolean>>
}

export default function LeaveTeamDialog({ ...props }: ModalProps) {
    const [userName, setUserName] = useState('MusorDMT')
    const [userEmail, setUserEmail] = useState('musordmt@proton.me')
    const [walletAddress, setWalletAddress] = useState('0x82b23c88ad897f786dff234')

    const org = useOrganization()
    const auth = useAuth()

    useEffect(() => {
        if (!auth) return
        
        if (auth.user?.displayName)
            setUserName(auth.user.displayName)
        if (auth.user?.email)
            setUserEmail(auth.user.email)
        if (auth.user?.walletAddress)
            setWalletAddress(auth.user.walletAddress)
    }, [auth])

    const handleDelete = async () => {
        if (!org.organization) return

        const response = await leaveTeam(props.id, userEmail)
        if (response.success) {
            org.setOrganization(org.organization.filter(org => org.id !== props.id))
            console.log('Successfully left the team')
        } else {
            console.error('Failed to leave the team')
        }
    }

    return (
        <Dialog open={props.open} onOpenChange={props.setOpen}>
            <DialogContent className="p-0 gap-0 transform overflow-hidden rounded-lg border border-level-3 bg-background sm:max-w-[600px]">
                <DialogTitle className="text-xl lg:text-2xl bg-background border-b border-level-3 p-4 gap-4 overflow-hidden">
                    Leave Team
                </DialogTitle>
                <div className='p-4 flex flex-col gap-4'>
                    <p>
                        You are about to leave {props.name}. In order to regain access at a later time, a Team Owner must invite you.
                    </p>
                    <p>
                        Are you sure you want to continue?
                    </p>
                </div>
                <DialogFooter className='p-4 flex flex-row sm:justify-between border-t border-level-3 bg-level-1'>
                    <Button variant="outline" onClick={() => props.setOpen(false)}>Cancel</Button>
                    <Button variant="destructive" onClick={handleDelete}>Confirm</Button>
                </DialogFooter>
            </DialogContent>
        </Dialog>
    )
}