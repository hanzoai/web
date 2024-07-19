import React, { type PropsWithChildren } from 'react'

import { Header, Footer } from '@hanzo/brand'

import siteDef from '@/site-def'

const Layout: React.FC<PropsWithChildren> = async ({
    children
}) => (<>
    {children}
    <Footer siteDef={siteDef} className='max-w-screen-2xl w-full pt-16 lg:mx-auto ' />
</>)

export default Layout
