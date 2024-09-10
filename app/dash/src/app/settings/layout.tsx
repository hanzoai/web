'use client'

import React, { type PropsWithChildren } from 'react'
import AdminHeader from "@/layout/header";
import SideBar from '@/layout/settings-sidebar';
import { useStore } from '@/stores';

const Layout: React.FC<PropsWithChildren> = async ({
  children
}) => {
  const { credentialStore } = useStore()

  const [isLoading, setIsLoading] = React.useState(true)

  React.useEffect(() => {
    const interval = setInterval(() => {
      if (credentialStore.isLoggedIn) {
        clearInterval(interval)
        setIsLoading(false)
      }
    }, 500)
  }, [])

  return (
    <div className='flex flex-row h-full w-full p-2 md:p-4 md:gap-4 max-w-[1500px] justify-center self-center'>
      <SideBar layout='hidden'/>
      <div className="flex flex-col overflow-y-auto md:border md:border-level-1 md:rounded-md w-full">
        <AdminHeader layout='settings'/>
        {isLoading ? <div className="w-full flex justify-center p-4">Loading...</div> :
          <>{children}</>
        }
      </div>
    </div>
  )
}

export default Layout
