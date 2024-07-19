'use client'

import { Ethereum } from '@hanzo/auth/icons'
import {
  Button,
  Popover,
  PopoverContent,
  PopoverTrigger,
  Separator,
} from '@hanzo/ui/primitives'
import { useEffect, useState } from 'react'
import ModalDialog from '@/components/modal-dialog'

const AdminHeader: React.FC<{
  content: string
}> = ({
  content = 'Karma'
}) => {
    const [openCommandMenu, setOpenCommandMenu] = useState(false)

    useEffect(() => {
      const handleCommandMenuEvent = (event: KeyboardEvent) => {
        if ((event.metaKey || event.ctrlKey) && event.key == 'k') 
          {
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

    const handleWalletClick = () => {

    }

    const handleLogOut = () => {

    }

    return (
      <div className="w-full h-[80px] flex items-center justify-between border-b-[1px] border-dashed border-[#AAAAAA33]">
        <div className="py-2 pl-8">
          <div className="text-xl font-bold">{content}</div>
        </div>
        <div className="py-2 pr-8">
          <Popover>
            <PopoverTrigger asChild>
              <Button
                variant="outline"
                size='icon'
                className='rounded-full text-muted border-2 border-muted bg-level-1 hover:bg-level-2 hover:border-foreground hover:text-foreground uppercase w-8 h-8'
              ><img src="assets/images/01.png" className="aspect-square rounded-full" alt="profile" width={30} /></Button>
            </PopoverTrigger>
            <PopoverContent className='bg-level-0 mr-4 !px-0'>
              <div className="grid gap-4">
                <div className="space-y-2 truncate px-4">
                  {auth.user?.displayName ? (
                    <>
                      <h4 className="font-medium leading-none truncate">{auth.user.displayName}</h4>
                      <p className="text-sm opacity-50 truncate">{auth.user.email}</p>
                    </>
                  ) : (
                    <h4 className="font-medium leading-none truncate">{auth.user?.email}</h4>
                  )}
                  {auth.user?.walletAddress ? (
                    <p className="text-sm opacity-50 truncate">{auth.user.walletAddress}</p>
                  ) : (
                    <Button variant="outline" className='w-full flex items-center gap-2' onClick={() => handleWalletClick}>
                      <Ethereum height={20} />Connect your wallet
                    </Button>
                  )}
                </div>
                <Separator />
                    <div className='h-8 flex flex-row justify-between text-sm opacity-50 truncate rounded-sm hover:bg-muted-4 hover:cursor-pointer items-center mx-2 px-2' onClick={() => setOpenCommandMenu(true)}>
                      <div className=''>Command Menu</div>
                      <div className='flex flex-row gap-2 text-xs'>
                        <div className='rounded-sm border p-1 bg-background'>Ctrl</div>
                        <div className='rounded-sm border p-1 bg-background'>K</div>
                      </div>
                    </div>
                <Separator />
                <div className='px-2'>
                  <Button variant="outline" onClick={() => handleLogOut} className='w-full'>Logout</Button>
                </div>
              </div>
            </PopoverContent>
          </Popover>
        </div>
        <ModalDialog open={openCommandMenu} setOpen={setOpenCommandMenu}/>
      </div>
    )
  }

export default AdminHeader;
