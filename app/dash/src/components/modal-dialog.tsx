'use client'

import { useState, useEffect } from 'react'
import { Dialog, DialogBackdrop, DialogPanel, DialogTitle } from '@headlessui/react'
import type { Dispatch, SetStateAction } from 'react'
import { Input } from '@hanzo/ui/primitives'
import SearchTeam from './icons/search-team'
import SearchProject from './icons/search-project'
import { PlusIcon, ArrowLeftIcon } from 'lucide-react'

type ModealProps = {
    open: boolean
    setOpen: Dispatch<SetStateAction<boolean>>
}

export default function ModalDialog({ ...props }: ModealProps) {
    const [projectSearch, setProjectSearch] = useState('')

    const handleSearch = () => {}
    const handleESCClick = () => {
        props.setOpen(false)
    }
    const handleSearchProjects = () => {}
    const handleCreateNewProjects = () => {}
    const handleSearchTeams = () => {}
    const handleCreateNewteam = () => {}
    const handleGoToCurrentProject = () => {}

    return (
        <Dialog open={props.open} onClose={props.setOpen} className="relative z-10">
            <DialogBackdrop
                transition
                className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity data-[closed]:opacity-0 data-[enter]:duration-300 data-[leave]:duration-200 data-[enter]:ease-out data-[leave]:ease-in"
            />

            <div className="fixed inset-0 z-10 w-screen overflow-y-auto bg-[#000000CC]">
                <div className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
                    <DialogPanel
                        transition
                        className="relative transform overflow-hidden rounded-lg border border-level-1 bg-background text-left shadow-xl transition-all data-[closed]:translate-y-4 data-[closed]:opacity-0 data-[enter]:duration-300 data-[leave]:duration-200 data-[enter]:ease-out data-[leave]:ease-in sm:my-8 sm:w-full sm:max-w-lg data-[closed]:sm:translate-y-0 data-[closed]:sm:scale-95"
                    >
                        <div className="sm:flex sm:items-start w-full">
                            <div className="text-center sm:text-left w-full text-sm font-light">
                                <DialogTitle as="h3" className="text-base font-semibold leading-6 !text-primary border-b border-level-1 px-2 h-12 flex flex-row items-center justify-between">
                                    <Input placeholder='What are you finding...' className='outline-none border-none ring-offset-background focus-visible:ring-background' onChange={(event) => setProjectSearch(event.target.value)}></Input>
                                    <div className='h-6 flex rounded-sm bg-background hover:bg-level-1 border border-level-2 px-1 items-center hover:cursor-pointer' onClick={() => handleESCClick()}>Esc</div>
                                </DialogTitle>
                                <div className="p-2 w-full flex flex-col gap-2 max-h-[400px] overflow-auto custom-scroll">
                                    <div className='w-full flex flex-col'>
                                        <div className='px-2 h-12 flex items-center'>Projects</div>
                                        <div className='px-2 h-12 rounded-sm hover:bg-level-1 hover:cursor-pointer flex flex-row justify-between items-center'>
                                            <div className='flex flex-row gap-2 px-1'>
                                                <SearchProject />
                                                <div className='px-3'>Search Projects...</div>
                                            </div>
                                            <div className='h-6 rounded-sm bg-background border border-level-2 px-1 text-sm font-light flex items-center'>P</div>
                                        </div>
                                        <div className='px-2 h-12 rounded-sm hover:bg-level-1 flex flex-row items-center gap-2 hover:cursor-pointer'>
                                            <PlusIcon />
                                            <div className='px-3'>Create New Projects</div>
                                        </div>
                                    </div>
                                    <div className='w-full flex flex-col'>
                                        <div className='px-2 h-12 flex items-center'>Teams</div>
                                        <div className='px-2 h-12 rounded-sm hover:bg-level-1 hover:cursor-pointer flex flex-row justify-between items-center'>
                                            <div className='flex flex-row gap-2 px-1'>
                                                <SearchTeam />
                                                <div className='px-3'>Search Teams...</div>
                                            </div>
                                            <div className='h-6 rounded-sm bg-background border border-level-2 px-1 text-sm font-light flex items-center'>T</div>
                                        </div>
                                        <div className='px-2 h-12 rounded-sm hover:bg-level-1 hover:cursor-pointer flex flex-row items-center gap-2'>
                                            <PlusIcon />
                                            <div className='px-3'>Create New Team</div>
                                        </div>
                                    </div>
                                    <div className='w-full flex flex-col'>
                                        <div className='px-2 h-12 flex items-center'>Navigation</div>
                                        <div className='px-2 h-12 rounded-sm hover:bg-level-1 flex flex-row items-center gap-2 hover:cursor-pointer'>
                                            <ArrowLeftIcon />
                                            <div className='px-3'>Go to Current Project</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </DialogPanel>
                </div>
            </div>
        </Dialog>
    )
}