import React, { type PropsWithChildren } from 'react'
import AdminHeader from "@/layout/header";
import SideBar from '@/layout/sidebar';

const Layout: React.FC<PropsWithChildren> = async ({
  children
}) => (<>
  <div className='flex flex-row h-full w-full p-4 gap-4'>
    <SideBar />
    <div className="flex flex-col overflow-y-auto border border-[#AAAAAA33] rounded-md w-full">
      <div className="flex items-center justify-between space-y-2">
        <AdminHeader content='Karma'/>
      </div>
      {children}
    </div>
  </div>
</>)

export default Layout
