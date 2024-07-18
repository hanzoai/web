'use client'

import { useState } from 'react'
import { Dialog, DialogBackdrop, DialogPanel, DialogTitle } from '@headlessui/react'
import type { Dispatch, SetStateAction } from 'react'

type ModealProps = {
    open: boolean
    setOpen: Dispatch<SetStateAction<boolean>>
}

export default function ModalDialog({ ...props }: ModealProps) {

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
                        className="relative transform overflow-hidden rounded-lg border bg-background text-left shadow-xl transition-all data-[closed]:translate-y-4 data-[closed]:opacity-0 data-[enter]:duration-300 data-[leave]:duration-200 data-[enter]:ease-out data-[leave]:ease-in sm:my-8 sm:w-full sm:max-w-lg data-[closed]:sm:translate-y-0 data-[closed]:sm:scale-95"
                    >
                        <div className="sm:flex sm:items-start">
                            <div className="text-center sm:text-left">
                                <DialogTitle as="h3" className="text-base font-semibold leading-6 !text-primary border-b px-4 h-12 flex flex-row items-center justify-between">
                                    <input placeholder='What are you finding...' className='bg-background outline-none'></input>
                                    <div className='h-6 rounded-sm bg-muted-4 text-xs font-light px-2 flex items-center text-center'><p>ESC</p></div>
                                </DialogTitle>
                                <div className="p-4">
                                    <p className="text-sm text-gray-500">
                                        Are you sure you want to deactivate your account? All of your data will be permanently removed.
                                        This action cannot be undone.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </DialogPanel>
                </div>
            </div>
        </Dialog>
    )
}