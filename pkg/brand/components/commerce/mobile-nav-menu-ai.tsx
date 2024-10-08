'use client'
import React, { useState } from 'react'
import { ArrowRight, Plus } from 'lucide-react'
import { Search } from '../icons'
import { Button, Card } from '@hanzo/ui/primitives'
import { Logo } from '..'

interface MobileNavMenuAIProps {
    setMenuOpen: (open: boolean) => void
}

const MobileNavMenuAI: React.FC<MobileNavMenuAIProps> = ({ setMenuOpen }) => {
    const [isOpen, setIsOpen] = useState<boolean>(false)

    return (
        <>
            <div className="w-full px-4 py-4 text-2xl cursor-pointer ">
                <div className='flex h-11 justify-between items-center'>
                    <Logo size='sm'  layout='full'/>
                    <Plus width={33.83} height={33.83} className=' flex-none rotate-45 block h-full will-change-transform transition-transform transition-scale transition-duration-[1500]' onClick={() => setMenuOpen(false)} />
                </div>
                <div className="px-5 flex items-center gap-5 border-b border-[#3A3A3A] mt-10 rounded-2xl bg-muted-4">
                    <div className="text-muted-1 font-bold flex-1 flex justify-between h-9 items-center" onClick={() => setIsOpen(true)}>
                        <span className='text-base pl-2 font-light'>Ask AI a question</span>
                        <ArrowRight />
                    </div>                    
                </div>
            </div>
            <div className={
                'fixed bottom-0 sm:bottom-16 right-0 w-full h-full ' +
                'sm:max-w-[400px] sm:max-h-[550px] sm:px-4 z-floating ' +
                (isOpen ? 'flex' : 'hidden')
            }>
                <Card className='flex flex-col h-full w-full'>
                    <div className='flex px-4 py-2 h-16 bg-level-0 items-center justify-between'>
                        <h3 className='font-semibold font-heading'>Hanzo</h3>
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