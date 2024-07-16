import React, { type PropsWithChildren } from 'react'
import AdminHeader from "@/layout/header";
import SideBar from '@/layout/sidebar';

const Layout: React.FC<PropsWithChildren> = async ({
  children
}) => (<>
  <div className='flex flex-row h-full'>
    <SideBar />
    <div className="flex flex-col m-4 overflow-y-auto border border-[#AAAAAA33] rounded-md">
      <div className="flex items-center justify-between space-y-2">
        <AdminHeader content='Karma'/>
      </div>
      {children}
    </div>
  </div>
</>)

export default Layout
