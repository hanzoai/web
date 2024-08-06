'use client'

import React from 'react'
import { FileSearch } from 'lucide-react'

const UniversalPage: React.FC = () => {
    return (
        <div className="p-2 md:p-4 flex flex-col gap-4">
            <p className='text-xl md:text-2xl font-medium'>Invoices</p>
            <div className='border border-level-1 rounded-md flex flex-col items-center justify-center gap-4 py-40 px-20'>
                <div className='h-10 w-10 border border-level-2 rounded-md flex items-center justify-center bg-level-1'>
                    <FileSearch size={30} strokeWidth={1} color='#AAAAAA'/>
                </div>
                <div className='text-sm font-medium text-primary'>No Invoices</div>
                <div className='text-sm font-normal text-muted-2'>You currently don't have any invoices</div>
            </div>
        </div>
    )
}

export default UniversalPage