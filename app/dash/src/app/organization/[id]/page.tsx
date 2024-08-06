'use client'

import React, { useState, useEffect } from 'react'
import { useParams, useRouter } from 'next/navigation'
import { CircleEllipsis } from 'lucide-react'

import { useAuth } from '@hanzo/auth/service'
import { Button, Popover, PopoverTrigger, PopoverContent } from '@hanzo/ui/primitives'

import { useOrganization } from '@/context/organization-context'
import { getProjectsByOrgId as getProjectsByOrgIdHelper } from '@/utils/firebase-utils'
import InviteMemberDialog from '@/components/invite-member'
import CreateProjectDialog from '@/components/create-project'
import DeleteProjectDialog from '@/components/delete-project'
import DeleteTeamDialog from '@/components/delete-team'

const UniversalPage: React.FC = () => {
    const [userName, setUserName] = useState('MusorDMT')
    const [userEmail, setUserEmail] = useState('musordmt@proton.me')
    const [walletAddress, setWalletAddress] = useState('0x82b23c88ad897f786dff234')

    const [openInviteMemberDialog, setOpenInviteMemberDialog] = useState(false)
    const [openCreateProjectDialog, setOpenCreateProjectDialog] = useState(false)
    const [oepnDeleteProjectDialog, setOepnDeleteProjectDialog] = useState(false)
    const [oepnDeleteTeamDialog, setOepnDeleteTeamDialog] = useState(false)
    const [foundOrg, setFoundOrg] = useState<{ id: string, name: string, owner: string, role: string }>()
    const [projects, setProjects] = useState<{ id: string, name: string }[]>([])

    const org = useOrganization()
    const params = useParams()
    const router = useRouter()
    const auth = useAuth()

    if (!auth) return
    if (!org.organization) return

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
        if (!auth) return
        if (!org.organization) return

        const foundOrg = org.organization.find(o => o.id === id)
        setFoundOrg(foundOrg)
        getProjectsByOrgId()
    }, [org, id, auth])

    const getProjectsByOrgId = async () => {
        const projects = await getProjectsByOrgIdHelper(id)
        setProjects(projects.data)
    }

    const handleViewClick = (id: string) => {
        router.push(`/projects/${id}`)
    }

    return (
        <div className="p-2 md:p-4 w-full flex flex-col gap-4">
            <div className='text-xl md:text-2xl flex flex-row justify-between'>
                <p>Projects</p>
                <div className='flex flex-row gap-2'>
                    <Button variant='outline' size='sm' onClick={() => setOpenInviteMemberDialog(true)}>Invite Member</Button>
                    <Button variant='primary' size='sm' onClick={() => setOpenCreateProjectDialog(true)}>Creat Project</Button>
                    {foundOrg?.role == 'owner' && <Button variant='destructive' size='sm' onClick={() => setOepnDeleteTeamDialog(true)}>Delete Team</Button>}
                </div>
                <InviteMemberDialog organizationName={foundOrg ? foundOrg.name : ''} open={openInviteMemberDialog} setOpen={setOpenInviteMemberDialog} />
                <CreateProjectDialog id={id} open={openCreateProjectDialog} setOpen={setOpenCreateProjectDialog} projects={projects} setProjects={setProjects} />
                <DeleteTeamDialog id={id} name={foundOrg?.name} open={oepnDeleteTeamDialog} setOpen={setOepnDeleteTeamDialog} />
            </div>
            <div className={`bg-background flex flex-col ${projects.length !== 0 ? 'border rounded-md border-level-3' : ''}`}>
                {projects.map((project, index, { length }) => (
                    <div key={project.id} className={`p-4 flex flex-row justify-between items-center ${index !== length - 1 ? 'border-b border-level-3' : ''}`}>
                        <p>{project.name}</p>
                        <Popover>
                            <PopoverTrigger asChild>
                                <CircleEllipsis strokeWidth={1.5} size={20} className='hover:cursor-pointer' />
                            </PopoverTrigger>
                            <PopoverContent className='bg-level-0 mr-8 !p-2 text-sm text-primary font-light border-level-1 w-fit flex flex-col'>
                                <div className='hover:cursor-pointer hover:bg-level-3 p-2 rounded-sm text-sm' onClick={() => handleViewClick(project.id)}>View</div>
                                <div className='hover:cursor-pointer hover:bg-level-3 p-2 rounded-sm text-sm' onClick={() => setOepnDeleteProjectDialog(true)}>Delete Project</div>
                            </PopoverContent>
                        </Popover>
                        <DeleteProjectDialog id={project.id} name={project.name} open={oepnDeleteProjectDialog} setOpen={setOepnDeleteProjectDialog} projects={projects} setProjects={setProjects} />
                    </div>
                ))}
            </div>
        </div>
    )
}

export default UniversalPage