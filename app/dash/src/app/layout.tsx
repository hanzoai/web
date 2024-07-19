import React, { type PropsWithChildren } from 'react'

import {
  RootLayout as RootLayoutCore,
  viewport as ViewportCode,
} from '@hanzo/brand/root-layout'


import siteDef from '../site-def'
import _metadata from '../metadata'

import "./globals.css"

export const metadata = { ..._metadata }
export const viewport = { ...ViewportCode }

const RootLayout: React.FC<PropsWithChildren> = async ({
  children
}) => (
  <RootLayoutCore siteDef={siteDef}>
    {children}
  </RootLayoutCore>
)

export default RootLayout
