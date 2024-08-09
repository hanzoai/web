'use client'

import React, { useState, useEffect } from 'react'
import { useParams } from 'next/navigation'

import { useAuth } from '@hanzo/auth/service'
import { Button } from '@hanzo/ui/primitives'

import { useOrganization } from '@/context/organization-context'
import { getProjectById as getProjectByIdHelper } from '@/utils/firebase-utils'
import DeleteProjectDialog from '@/components/delete-project'

const UniversalPage: React.FC = () => {
    const [userName, setUserName] = useState('MusorDMT')
    const [userEmail, setUserEmail] = useState('musordmt@proton.me')
    const [walletAddress, setWalletAddress] = useState('0x82b23c88ad897f786dff234')
    
    const [openDeleteProjectDialog, setOpenDeleteProjectDialog] = useState(false)
    const [foundOrg, setFoundOrg] = useState<{ id: string, name: string, owner: string, role: string } | undefined>(undefined)
    const [project, setProject] = useState<{ id: string, name: string, orgId: string }>()
    
    const auth = useAuth()
    const org = useOrganization()
    const params = useParams()
    
    const id = params.id as string

    useEffect(() => {
        if (!auth) return
        
        if (auth.user?.displayName)
            setUserName(auth.user.displayName)
        if (auth.user?.email)
            setUserEmail(auth.user.email)
        if (auth.user?.walletAddress)
            setWalletAddress(auth.user.walletAddress)
    }, [auth])

    useEffect(() => {
        getProjectsById()
    }, [org, id])

    const getProjectsById = async () => {
        const project = await getProjectByIdHelper(id)
        if (project.success && project.data) {
            setProject(project.data)
        } else {
            console.log('Project not found: ', project.error)
        }
    }

    return (
        <div className="p-2 md:p-4 w-full h-full flex flex-col gap-4">
            {
                project ?
                    <div className='text-xl md:text-2xl flex flex-row justify-between'>
                        <p>{project.name}</p>
                        <Button variant='primary' size='sm' onClick={() => setOpenDeleteProjectDialog(true)}>Delete Project</Button>
                        <DeleteProjectDialog id={id} name={project.name}open={openDeleteProjectDialog} setOpen={setOpenDeleteProjectDialog}/>
                    </div>
                    :
                    <div>Loading...</div>
            }
            <iframe src="https://gui.hanzo.ai/" style= {{ width: '100%', height: 'calc(100vh - 164px)' }} title="Flowise" />
        </div>
    )
}

export default UniversalPage