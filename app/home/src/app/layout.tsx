import React, { type PropsWithChildren } from 'react'

import { 
  RootLayout as RootLayoutCore, 
  viewport as ViewportCode, 
} from '@hanzo/brand/root-layout'
import './global.css'


import siteDef from '@/site-def'
import _metadata from '@/metadata'

export const metadata = { ..._metadata }
export const viewport = { ...ViewportCode}

const RootLayout: React.FC<PropsWithChildren> = async ({
  children
}) =>  (
  <RootLayoutCore siteDef={siteDef} showHeader={true}>
    {children}
  </RootLayoutCore>
)

export default RootLayout
