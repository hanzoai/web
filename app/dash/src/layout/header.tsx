'use client'

import { useEffect, useState } from 'react'
import { useRouter } from 'next/navigation'
import {
  PlusCircleIcon,
  ChevronDownIcon,
  ChevronUpIcon,
  ChevronsUpDownIcon,
  AlignLeft,
  Building,
  MonitorCheck
} from 'lucide-react'

import { Ethereum } from '@hanzo/auth/icons'
import { Button, Popover, PopoverContent, PopoverTrigger, Separator, Sheet, SheetTrigger, SheetContent, SheetHeader, SheetTitle } from '@hanzo/ui/primitives'
import { useAuth } from '@hanzo/auth/service'

import ModalDialog from '@/components/modal-dialog'
import CreateTeamDialog from '@/components/create-team'
import { useOrganization, type Organization } from '@/context/organization-context'
import { getOrganizationsByMember, getProjectsByOrgId } from '@/utils/firebase-utils'
import { useStore } from "@/stores";
import SettingsSideBar from "./settings-sidebar"
import SideBar from "./sidebar"

export default function AdminHeader(props: { content?: string, layout?: string }) {
  const [userName, setUserName] = useState('MusorDMT')
  const [userEmail, setUserEmail] = useState('musordmt@proton.me')
  const [walletAddress, setWalletAddress] = useState('0x82b23c88ad897f786dff234')

  const router = useRouter()

  const [isLoading, setIsLoading] = useState(true)
  const [openMenu, setOpenMenu] = useState(false)
  const [openOrg, setOpenOrg] = useState(false)
  const [openCommandMenu, setOpenCommandMenu] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [openCreateTeamDialog, setOpenCreateTeamDialog] = useState(false)
  const [organizations, setOrganizations] = useState<Organization[]>([])
  const [projects, setProjects] = useState<{ orgId: String, id: string, name: string }[]>([])
  const [selectedOrg, setSelectedOrg] = useState<string>('')

  const auth = useAuth()
  const org = useOrganization()
  const { credentialStore } = useStore()


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
    handleLogin()
    const interval = setInterval(() => {
      if (credentialStore.isLoggedIn) {
        clearInterval(interval)
        setIsLoading(false)
      }
    }, 500)
  }, [])

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
  }, [])

  useEffect(() => {
    if (!userEmail) return
    getOrganizations(userEmail)
  }, [userEmail])

  const handleLogin = async () => {
    credentialStore.setProperty('isLoading', true)
    try {
      credentialStore.setProperty('email', 'karma@hanzo.ai')
      credentialStore.setProperty('password', 'pp2karma!zO')
      await credentialStore.login()
      if (!credentialStore.org) await credentialStore.getOrg()
    } catch (ex) {

    } finally {
      credentialStore.setProperty('isLoading', false)
      // router.push("/dashboard")
    }
  }

  const getOrganizations = async (email: string) => {
    if (!org) return

    setIsLoading(true)

    if (organizations.length > 0) return

    const res = await getOrganizationsByMember(email)
    org.setOrganization(res.data)
    setOrganizations(res.data)

    res.data.forEach(async (item: Organization) => {
      const projects = await getProjectsByOrgId(item.id)
      console.log(projects.data)
      setProjects((prev) => {
        const newProjects = projects.data
          .filter((pro: { id: string, name: string }) => !prev.some(existingPro => existingPro.id === pro.id))
          .map((pro: { id: string, name: string }) => ({
            orgId: item.id,
            id: pro.id,
            name: pro.name
          }))
        return [...prev, ...newProjects]
      })
    })

    setIsLoading(false)
  }

  const handleWalletClick = () => { }

  const handleLogOut = () => { }

  const handleOrgEnter = async (item: Organization) => {
    setSelectedOrg(item.id)
  }

  return (
    isLoading ? <></> :
      <div className="w-full h-[80px] flex items-center justify-between md:border-b md:border-dashed md:border-level-1 py-1 md:py-2 px-2 md:px-4">
        <div className="text-xl font-bold flex flex-row gap-2">
          <p className='hidden md:block'>{props.content ? props.content : credentialStore.user.firstName}</p>
          <Sheet open={mobileMenuOpen} onOpenChange={setMobileMenuOpen}>
            <SheetTrigger asChild>
              <div className='block md:hidden'><AlignLeft /></div>
            </SheetTrigger>
            <SheetContent side='left'>
              {
                props.layout == 'settings' ?
                  <SettingsSideBar layout='flex' />
                  :
                  <SideBar layout='flex' />
              }
            </SheetContent>
            <Popover>
              <PopoverTrigger asChild>
                <div className='flex items-center hover:bg-level-1 rounded-sm' onClick={() => setOpenOrg(!openOrg)}>
                  <ChevronsUpDownIcon size={20} strokeWidth={1} />
                </div>
              </PopoverTrigger>
              <PopoverContent className='bg-level-0 mr-8 !p-0 text-sm text-primary font-light border-level-1 grid grid-cols-2 w-96 overflow-hidden'>
                <div className='bg-level-1 border-r border-level-2 flex flex-col p-2'>
                  <div className='font-medium text-center text-xs p-3 text-muted-1'>Teams</div>
                  {organizations.map((item, key) => (
                    <a href={'/organization/' + item.id} key={key} className='flex gap-2 truncate hover:bg-level-2 p-3 rounded-sm' onMouseEnter={() => handleOrgEnter(item)} target='_self'><Building size={20} strokeWidth={1} />{item.name}</a>
                  ))}
                  <div className='flex gap-2 truncate rounded-md hover:bg-level-2 hover:cursor-pointer items-center p-3' onClick={() => setOpenCreateTeamDialog(true)}><PlusCircleIcon size={20} strokeWidth={1}></PlusCircleIcon>Create Team</div>
                </div>
                <div className='bg-background flex flex-col p-2'>
                  <div className='font-medium text-center text-xs p-3 text-muted-1'>Projects</div>
                  {projects.length > 0 ? projects.filter(project => project.orgId === selectedOrg).map((item, key) => (
                    <a href={'/projects/' + item.id} key={key} className='flex gap-2 truncate hover:bg-level-2 p-3 rounded-sm' target='_self'><MonitorCheck size={20} strokeWidth={1} />{item.name}</a>
                  )) : <div>No Projects, yet!<br />This team has no projects.</div>}
                  <a href={'/organization/' + selectedOrg} className='flex gap-2 truncate rounded-md hover:bg-level-2 hover:cursor-pointer items-center p-3' target='_self'><PlusCircleIcon size={20} strokeWidth={1}></PlusCircleIcon>Create Project</a>
                </div>
              </PopoverContent>
            </Popover>
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
                {userName ? (
                  <>
                    <h4 className="h-8 font-medium leading-none truncate flex items-center">{userName}</h4>
                    <p className="h-8 text-sm opacity-50 truncate flex items-center">{userEmail}</p>
                  </>
                ) : (
                  <h4 className="h-8 font-medium leading-none truncate flex items-center">{userEmail}</h4>
                )}
                {walletAddress ? (
                  <p className="h-8 text-sm opacity-50 truncate flex items-center">{walletAddress}</p>
                ) : (
                  <Button variant="outline" className='w-full flex items-center gap-2' onClick={() => handleWalletClick}>
                    <Ethereum height={20} />Connect your wallet
                  </Button>
                )}
              </div>
              <Separator className='bg-level-1' />
              <div className='flex flex-col'>
                <div className='h-12 flex truncate rounded-md hover:bg-level-1 hover:cursor-pointer items-center mx-2 p-2' onClick={() => router.push('/dashboard')}>Dashboard</div>
                <div className='h-12 flex truncate rounded-md hover:bg-level-1 hover:cursor-pointer items-center mx-2 p-2' onClick={() => router.push('/settings')}>Account Settings</div>
                <div className='h-12 flex flex-row justify-between truncate rounded-md hover:bg-level-1 hover:cursor-pointer items-center mx-2 p-2' onClick={() => setOpenCreateTeamDialog(true)}>Create Team<PlusCircleIcon></PlusCircleIcon></div>
              </div>
              <Separator className='bg-level-1' />
              <div className='h-12 flex flex-row justify-between truncate rounded-md hover:bg-level-1 hover:cursor-pointer items-center mx-2 p-2' onClick={() => setOpenCommandMenu(true)}>
                <p>Command Menu</p>
                <div className='flex flex-row gap-2 text-xs'>
                  <div className='rounded-sm border border-level-2 p-1 bg-background'>Command</div>
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
        <CreateTeamDialog open={openCreateTeamDialog} setOpen={setOpenCreateTeamDialog} />
      </div>
  )
}