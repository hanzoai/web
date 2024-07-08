import React, { type PropsWithChildren } from 'react'
import AdminHeader from "@/layout/header";
import SideBar from '@/layout/sidebar';

const Layout: React.FC<PropsWithChildren> = async ({
  children
}) => (<>
  <AdminHeader />
  <div className='flex flex-row h-[calc(100vh-80px)]'>
    <SideBar />
    {children}
  </div>
</>)

export default Layout
