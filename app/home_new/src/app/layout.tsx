import React, { type PropsWithChildren } from 'react'
import {
  RootLayout as RootLayoutCore,
} from '@hanzo/brand/root-layout'
import siteDef from '@/site-def'

const RootLayout: React.FC<PropsWithChildren> = async ({
  children
}) => (
  <RootLayoutCore siteDef={siteDef}>
    {children}
  </RootLayoutCore>
)

export default RootLayout

