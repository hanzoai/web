import React, { type PropsWithChildren } from 'react'
import AdminHeader from "@/layout/header";
import SideBar from '@/layout/sidebar';

const Layout: React.FC<PropsWithChildren> = async ({
  children
}) => (<>
  <div className='flex flex-row h-full'>
    <SideBar />
    <div className="flex flex-col space-y-4 p-8 pt-6 overflow-y-auto border-1 rounded-lg">
      <div className="flex items-center justify-between space-y-2">
        <AdminHeader content='Karma'/>
      </div>
      {children}
    </div>
  </div>
</>)

export default Layout
