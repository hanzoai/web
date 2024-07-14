import React, { type PropsWithChildren } from 'react'

import { RootLayout } from '@hanzo/brand/root-layout'


import siteDef from '../site-def'

const Layout: React.FC<PropsWithChildren> = async ({
  children
}) =>  (
  <RootLayout siteDef={siteDef} showHeader>
    {children}
  </RootLayout>
)

export default Layout
