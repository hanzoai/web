'use client'

import React, { useState, useEffect } from 'react'
import { useParams } from 'next/navigation'

import { useAuth } from '@hanzo/auth/service'
import { Button } from '@hanzo/ui/primitives'

import { useOrganization } from '@/context/organization-context'
import { getProjectById as getProjectByIdHelper } from '@/utils/firebase-utils'
import DeleteProjectDialog from '@/components/delete-project'
import { AlignJustify, GitFork, Users2, Store, Wrench, Bot, LockKeyhole, Variable, KeyRound, Files } from 'lucide-react'

const SidebarList = [
    { title: 'Chatflows', href: '/chatflows', icon: <GitFork /> },
    { title: 'Agentflows', href: '/agentflows', icon: <Users2 /> },
    { title: 'Marketplaces', href: '/marketplaces', icon: <Store /> },
    { title: 'Tools', href: '/tools', icon: <Wrench /> },
    { title: 'Assistants', href: '/assistants', icon: <Bot /> },
    { title: 'Credentials', href: '/credentials', icon: <LockKeyhole /> },
    { title: 'Variables', href: '/variables', icon: <Variable /> },
    { title: 'API Keys', href: '/apikey', icon: <KeyRound /> },
    { title: 'Document Stores', href: '/document-stores', icon: <Files /> }
]

const UniversalPage: React.FC = () => {
    const [userName, setUserName] = useState('MusorDMT')
    const [userEmail, setUserEmail] = useState('musordmt@proton.me')
    const [walletAddress, setWalletAddress] = useState('0x82b23c88ad897f786dff234')

    const [openDeleteProjectDialog, setOpenDeleteProjectDialog] = useState(false)
    const [foundOrg, setFoundOrg] = useState<{ id: string, name: string, owner: string, role: string } | undefined>(undefined)
    const [project, setProject] = useState<{ id: string, name: string, orgId: string }>()
    const [openSidebar, setOpenSidebar] = useState(false)
    // const [iframeUrl, setIframeUrl] = useState('/chatflows')
    const [selectedList, setSelectedList] = useState(0)

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

    const handleSidebarOpen = () => {
        setOpenSidebar(!openSidebar)
    }

    useEffect(() => {
        const iframe = document.getElementById('myIframe') as HTMLIFrameElement
        if (iframe && project) {
            iframe.contentWindow?.postMessage({
                type: 'IFRAME_LOADED',
                data: {
                    id: project?.id,
                    name: project?.name,
                    orgId: project?.orgId
                }
            }, '*')
        }
    }, [project])

    const OnClickSidebarListItem = (item: { title: string; href: string; icon: React.JSX.Element; }, index: number) => {
        setSelectedList(index)
        const iframe = document.getElementById('myIframe') as HTMLIFrameElement
        if (iframe) {
            // iframe.src = "http://localhost:3000" + item.href + '?project=' + project?.id
            iframe.src = "https://gui.hanzo.ai" + item.href + '?project=' + project?.id
        }
    }

    return (
        <div className="p-2 md:p-4 w-full h-full flex flex-col gap-4">
            {
                project ?
                    <div className='text-xl md:text-2xl flex flex-row justify-between'>
                        <div className='flex flex-row gap-10 items-center'>
                            <p>{project.name}</p>
                            <div className='border border-level-3 rounded-md w-6 h-6 items-center flex justify-center hover:cursor-pointer' onClick={handleSidebarOpen}>
                                <AlignJustify size={16} />
                            </div>
                        </div>
                        <Button variant='primary' size='sm' onClick={() => setOpenDeleteProjectDialog(true)}>Delete Project</Button>
                        <DeleteProjectDialog id={id} name={project.name} open={openDeleteProjectDialog} setOpen={setOpenDeleteProjectDialog} />
                    </div>
                    :
                    <div>Loading...</div>
            }
            {
                project &&
                <div className={`flex flex-row ${openSidebar ? 'gap-4' : ''}`}>
                    <div className={`flex flex-col py-4 ${openSidebar ? 'w-[250px]' : 'w-0 hidden'}`} >
                        <div className='flex flex-col gap-1'>
                            {SidebarList.map((item, index) => (
                                <div key={index} className={`flex flex-row gap-2 items-center rounded-md p-3 hover:cursor-pointer hover:bg-level-3 ${index == selectedList ? 'bg-level-3' : ''}`} onClick={() => OnClickSidebarListItem(item, index)}>
                                    <div className='w-6 h-6'>
                                        <div className='w-6 h-6'>{item.icon}</div>
                                    </div>
                                    <div className='text-sm'>{item.title}</div>
                                </div>
                            ))}
                        </div>
                    </div>
                    {/* <iframe id='myIframe' src={"http://localhost:3000/chatflows" + '?project=' + project.id} style={{ width: '100%', height: 'calc(100vh - 164px)' }} title="Flowise" className='border border-level-3' /> */}
                    <iframe id='myIframe' src={"https://gui.hanzo.ai/chatflows" + '?project=' + project.id} style={{ width: '100%', height: 'calc(100vh - 164px)' }} title="Flowise" className='border border-level-3' />
                </div>
            }
        </div>
    )
}

export default UniversalPage