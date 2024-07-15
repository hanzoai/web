import React, { type PropsWithChildren } from 'react'
import AdminHeader from "@/layout/header";
import SideBar from '@/layout/sidebar';

const Layout: React.FC<PropsWithChildren> = async ({
  children
}) => (<>
  <div className='flex flex-row h-full]'>
    <SideBar />
    {children}
  </div>
</>)

export default Layout
