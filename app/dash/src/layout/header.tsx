'use client'

import { useEffect, useState } from 'react'
import { useRouter } from 'next/navigation'
import { PlusCircleIcon, ChevronDownIcon, ChevronUpIcon, AlignLeft, BarChart, User2, ShoppingBasket, Notebook, Settings } from 'lucide-react'

import { Ethereum } from '@hanzo/auth/icons'
import { Button, Popover, PopoverContent, PopoverTrigger, Separator, Sheet, SheetTrigger, SheetContent, SheetHeader, SheetTitle } from '@hanzo/ui/primitives'
import { useAuth } from '@hanzo/auth/service'
import { Logo } from "@hanzo/brand"

import ModalDialog from '@/components/modal-dialog'

const AdminHeader: React.FC<{
  content: string
}> = ({
  content = 'Karma'
}) => {

    const router = useRouter()
    const [openMenu, setOpenMenu] = useState(false)
    const [openCommandMenu, setOpenCommandMenu] = useState(false)
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

    const sidebarData = [
      { label: "Overview", icon: <BarChart />, href: "/dashboard" },
      { label: "Users", icon: <User2 />, href: "/users" },
      { label: "Products", icon: <ShoppingBasket />, href: "/products" },
      { label: "Orders", icon: <Notebook />, href: "/orders" },
      { label: "Integrations", icon: <Settings />, href: "/integrations" },
    ];

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

    // const auth = useAuth()

    const auth = {
      user: {
        email: 'musordmt@proton.me',
        displayName: 'MusorDMT',
        walletAddress: '0x1111111111111111111111111111111'
      }
    }

    const handleMenu = () => { }

    const handleWalletClick = () => { }

    const handleLogOut = () => { }

    return (
      <div className="w-full h-[80px] flex items-center justify-between md:border-b md:border-dashed md:border-level-1 py-1 md:py-2 px-2 md:px-4">
        <div className="text-xl font-bold">
          <p className='hidden md:block'>{content}</p>
          <Sheet open={mobileMenuOpen} onOpenChange={setMobileMenuOpen}>
            <SheetTrigger asChild>
              <div className='block md:hidden'><AlignLeft /></div>
            </SheetTrigger>
            <SheetContent side='left'>
              <SheetHeader>
                <SheetTitle>
                  <div className="h-[80px] flex items-center justify-start p-2">
                    <Logo size='md' href='https://hanzo.ai/' className='flex' key='two' layout='text-only' />
                  </div>
                </SheetTitle>
              </SheetHeader>
              <div className='flex flex-col gap-4'>
                {sidebarData.map((item, index) => {
                  return (
                    <div key={index} onClick={() => {router.push(item.href); setMobileMenuOpen(false)}} className="flex flex-row gap-4 hover:cursor-pointer">
                      <div className='flex p-2 hover:bg-muted-4 w-full gap-2 text-xl text-muted-1 hover:text-primary rounded-sm justify-start'>
                        {item.icon}
                        <span>{item.label}</span>
                      </div>
                    </div>
                  )
                })
                }
              </div>
            </SheetContent>
          </Sheet>
        </div>
        <Popover>
          <PopoverTrigger asChild>
            <div className='flex flex-row gap-2' onClick={() => setOpenMenu(!openMenu)}>
              <img src="/assets/images/01.png" className="aspect-square rounded-full" alt="profile" width={30} />
              <div className='flex items-center'>
                <ChevronUpIcon className={openMenu ? 'block' : 'hidden'} size={16} />
                <ChevronDownIcon className={openMenu ? 'hidden' : 'block'} size={16} />
              </div>
            </div>
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
