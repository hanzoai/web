'use client'
import React, { useState } from 'react'
import { Plus } from 'lucide-react'
import { Search } from '../icons'
import { ChatWidget } from '../../components'
import { Button, Card } from '@hanzo/ui/primitives'
import LuxLogo from '../icons/hanzo-logo'

interface MobileNavMenuAIProps {
    setMenuOpen: (open: boolean) => void
}

const MobileNavMenuAI: React.FC<MobileNavMenuAIProps> = ({ setMenuOpen }) => {
    const [isOpen, setIsOpen] = useState<boolean>(false)

    return (
        <>
            <div className="w-full px-5 py-4 text-2xl bg-[#202020] cursor-pointer">
                <div className="flex items-center gap-5 border-b border-[#3A3A3A]">
                    <Search className='w-6 h-6 flex-none' />
                    <div className="text-white font-bold flex-1" onClick={() => setIsOpen(true)}>Ask AI Chat...</div>
                    <Plus className='w-6 h-6 flex-none rotate-45 transition-transform' onClick={() => setMenuOpen(false)} />
                </div>
            </div>
            <div className={
                'fixed bottom-0 sm:bottom-16 right-0 w-full h-full ' +
                'sm:max-w-[400px] sm:max-h-[550px] sm:px-4 z-floating ' +
                (isOpen ? 'flex' : 'hidden')
            }>
                <Card className='flex flex-col h-full w-full'>
                    <div className='flex px-4 py-2 h-16 bg-level-0 items-center justify-between'>
                        <h3 className='font-semibold font-heading'>LUX<span className='opacity-60'>AI</span></h3>
                        <Button onClick={() => setIsOpen(false)} variant='link' size='icon' className='w-fit sm:hidden'>
                        <Plus className='w-6 h-6 flex-none mr-1 rotate-45 transition-transform'/>
                        </Button>
                    </div>
                    <iframe src="https://lux.chat/iframe" className='h-full' />
                </Card>
            </div>

        </>
    )
};

export default MobileNavMenuAI;