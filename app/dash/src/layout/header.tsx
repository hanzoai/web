'use client'

import { useEffect, useState } from 'react'
import { useRouter } from 'next/navigation'
import { Ethereum } from '@hanzo/auth/icons'
import { Button, Popover, PopoverContent, PopoverTrigger, Separator } from '@hanzo/ui/primitives'
import ModalDialog from '@/components/modal-dialog'
import { PlusCircleIcon } from 'lucide-react'

const AdminHeader: React.FC<{
  content: string
}> = ({
  content = 'Karma'
}) => {

    const router = useRouter()

    const [openCommandMenu, setOpenCommandMenu] = useState(false)

    useEffect(() => {
      const handleCommandMenuEvent = (event: KeyboardEvent) => {

        if ((event.metaKey || event.ctrlKey) && event.key == 'k') {
          event.preventDefault()
          setOpenCommandMenu(true)
        }
      }
      document.addEventListener("keydown", (event) => handleCommandMenuEvent(event))

      return () => {
        document.removeEventListener("keydown", (event) => handleCommandMenuEvent(event))
      }
    })

    const auth = {
      user: {
        email: 'musordmt@proton.me',
        displayName: 'MusorDMT',
        walletAddress: '0x1111111111111111111111111111111'
      }
    }

    const handleWalletClick = () => { }

    const handleLogOut = () => { }

    return (
      <div className="w-full h-[80px] flex items-center justify-between border-b border-dashed border-[#AAAAAA33] py-2 px-4">
        <div className="text-xl font-bold">{content}</div>
        <Popover>
          <PopoverTrigger asChild>
            <Button
              variant="outline"
              size='icon'
              className='rounded-full text-muted bg-level-1 hover:bg-level-2 hover:border-foreground hover:text-foreground uppercase w-8 h-8'
            ><img src="assets/images/01.png" className="aspect-square rounded-full" alt="profile" width={30} /></Button>
          </PopoverTrigger>
          <PopoverContent className='bg-level-0 mr-8 !px-0 text-sm text-primary font-light border-level-1'>
            <div className="grid gap-2">
              <div className="space-y-2 truncate px-4">
                {auth.user?.displayName ? (
                  <>
                    <h4 className="h-8 font-medium leading-none truncate flex items-center">{auth.user.displayName}</h4>
                    <p className="h-8 text-sm opacity-50 truncate flex items-center">{auth.user.email}</p>
                  </>
                ) : (
                  <h4 className="h-8 font-medium leading-none truncate flex items-center">{auth.user?.email}</h4>
                )}
                {auth.user?.walletAddress ? (
                  <p className="h-8 text-sm opacity-50 truncate flex items-center">{auth.user.walletAddress}</p>
                ) : (
                  <Button variant="outline" className='w-full flex items-center gap-2' onClick={() => handleWalletClick}>
                    <Ethereum height={20} />Connect your wallet
                  </Button>
                )}
              </div>
              <Separator className='bg-level-1' />
              <div className='flex flex-col'>
                <div className='h-12 flex truncate rounded-md hover:bg-level-1 hover:cursor-pointer items-center mx-2 p-2' onClick={() => router.push('/dashboard')}>DashBoard</div>
                <div className='h-12 flex truncate rounded-md hover:bg-level-1 hover:cursor-pointer items-center mx-2 p-2' onClick={() => router.push('/settings')}>Account Settings</div>
                <div className='h-12 flex flex-row justify-between truncate rounded-md hover:bg-level-1 hover:cursor-pointer items-center mx-2 p-2' onClick={() => router.push('/')}>Create Team<PlusCircleIcon></PlusCircleIcon></div>
              </div>
              <Separator className='bg-level-1' />
              <div className='h-12 flex flex-row justify-between truncate rounded-md hover:bg-level-1 hover:cursor-pointer items-center mx-2 p-2' onClick={() => setOpenCommandMenu(true)}>
                <p>Command Menu</p>
                <div className='flex flex-row gap-2 text-xs'>
                  <div className='rounded-sm border border-level-2 p-1 bg-background'>Ctrl</div>
                  <div className='rounded-sm border border-level-2 p-1 bg-background'>K</div>
                </div>
              </div>
              <Separator className='bg-level-1' />
              <div className='flex flex-col gap-2'>
                <div className='h-12 flex truncate rounded-md hover:bg-level-1 hover:cursor-pointer items-center mx-2 p-2' onClick={() => router.push('https://hanzo.ai')}>Home Page</div>
                <div className='px-2'>
                  <Button variant="primary" onClick={() => handleLogOut} className='h-12 w-full'>Logout</Button>
                </div>
              </div>
            </div>
          </PopoverContent>
        </Popover>
        <ModalDialog open={openCommandMenu} setOpen={setOpenCommandMenu} />
      </div>
    )
  }

export default AdminHeader;
