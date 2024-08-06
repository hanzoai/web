'use client'

import React, { useEffect, useState, type Dispatch, type SetStateAction } from 'react'
import {
    Input, Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from '@hanzo/ui/primitives'

interface InvitationComponentProps {
    index: number
    email: string
    role: 'member' | 'owner'
    setInvitationData: (index: number, email: string, role: 'member' | 'owner') => void
}

export default function SendInvitationEmailComponent({ ...props }: InvitationComponentProps) {
    const [email, setEmail] = useState(props.email)
    const [role, setRole] = useState<string>(props.role)

    useEffect(() => {
        props.setInvitationData(props.index, email, role as 'member' | 'owner')
    }, [email, role])

    return (
        <div className="w-full flex flex-row gap-2">
            <Input type="email" value={props.email} onChange={(e) => setEmail(e.target.value)} placeholder="tom.holdplacen@gmail.com" required />
            <Select value={role} onValueChange={setRole}>
                <SelectTrigger className="w-[180px]">
                    <SelectValue placeholder="Select a role" />
                </SelectTrigger>
                <SelectContent className='z-[51]'>
                    <SelectItem value="member">Member</SelectItem>
                    <SelectItem value="owner">Owner</SelectItem>
                </SelectContent>
            </Select>
        </div>
    )
}