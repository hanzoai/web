'use client'

import { useState, useEffect } from 'react'
import type { Dispatch, SetStateAction } from 'react'
import { useRouter } from 'next/navigation'
import { Input, Button, Dialog, DialogContent, DialogTitle, DialogFooter } from '@hanzo/ui/primitives'

import { deleteProjectById } from '@/utils/firebase-utils'
import { useOrganization } from '@/context/organization-context'

type ModalProps = {
    id: string
    name: string
    open: boolean
    setOpen: Dispatch<SetStateAction<boolean>>
    projects?: { id: string, name: string }[]
    setProjects?: React.Dispatch<React.SetStateAction<{
        id: string;
        name: string;
    }[]>>
}

export default function DeleteTeamDialog({ ...props }: ModalProps) {
    const org = useOrganization()
    const router = useRouter()

    if (!org) return

    const handleDelete = async () => {
        const response = await deleteProjectById(props.id)
        if (response.success) {
            console.log('Successfully delete the project')
            if (props.setProjects && props.projects)
                props.setProjects(props.projects.filter(project => project.id !== props.id))
            else router.push('/dashboard')
        } else {
            console.error('Failed to delete the project')
        }

        props.setOpen(false)
    }

    return (
        <Dialog open={props.open} onOpenChange={props.setOpen}>
            <DialogContent className="p-0 gap-0 transform overflow-hidden rounded-lg border border-level-3 bg-background sm:max-w-[600px]">
                <DialogTitle className="text-xl lg:text-2xl bg-background border-b border-level-3 p-4 gap-4 overflow-hidden">
                    Delete Project
                </DialogTitle>
                <div className='p-4 flex flex-col gap-4'>
                    <p>
                        You are about to delete {props.name}.
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