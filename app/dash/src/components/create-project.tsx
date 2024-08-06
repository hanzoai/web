'use client'

import { useState, useEffect } from 'react'
import type { Dispatch, SetStateAction } from 'react'
import { Input, Button, Dialog, DialogContent, DialogTitle, DialogFooter } from '@hanzo/ui/primitives'

import { createProject as createProjectHelper, getProjectsByOrgId as getProjectsByOrgIdHelper } from '@/utils/firebase-utils'
import { useOrganization } from '@/context/organization-context'

type ModalProps = {
    id: string
    open: boolean
    setOpen: Dispatch<SetStateAction<boolean>>
    projects: { id: string, name: string }[]
    setProjects: React.Dispatch<React.SetStateAction<{
        id: string;
        name: string;
    }[]>>
}

export default function CreateProjectDialog({ ...props }: ModalProps) {
    const [projectName, setProjectName] = useState('')

    const org = useOrganization()

    const handleCreate = async () => {
        if (!org.organization) return
        
        const response = await createProjectHelper(projectName, props.id)
        if (response.success && response.id) {
            console.log('Project created Successfully!: ', response.id)
            const oldList = props.projects
            props.setProjects([...oldList, { id: response.id, name: projectName }])
        }
        else console.error('Project creation failed: ', response.error)

        props.setOpen(false)
        setProjectName('')
    }

    return (
        <Dialog open={props.open} onOpenChange={props.setOpen}>
            <DialogContent className="p-0 gap-0 transform overflow-hidden rounded-lg border border-level-3 bg-background sm:max-w-[600px]">
                <DialogTitle className="text-xl lg:text-2xl bg-background border-b border-level-3 p-4 gap-4 overflow-hidden">
                    Create Project
                </DialogTitle>
                <div className="p-4 w-full flex flex-col gap-2">
                    <p className='text-sm font-light text-muted-2'>Project Name</p>
                    <Input type="text" value={projectName} onChange={(e) => { e.stopPropagation, setProjectName(e.target.value) }} placeholder="Name" required />
                </div>
                <DialogFooter className='p-4 flex flex-row sm:justify-between border-t border-level-3 bg-level-1'>
                    <Button variant="outline" onClick={() => props.setOpen(false)}>Cancel</Button>
                    <Button variant="primary" onClick={handleCreate}>Create</Button>
                </DialogFooter>
            </DialogContent>
        </Dialog>
    )
}