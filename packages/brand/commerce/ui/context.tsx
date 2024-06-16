'use client'
import React, { 
  createContext, 
  useContext, 
  useRef, 
  type PropsWithChildren, 
  useEffect,
  useLayoutEffect
} from 'react'
import { enableStaticRendering } from 'mobx-react-lite'
import { usePathname } from 'next/navigation'
import { useDebounceCallback } from 'usehooks-ts'


import { preset as twConfig } from '@hanzo/ui/tailwind'
import { useCommerce } from '@hanzo/commerce'

import type { CommerceDrawer, SelectAndBuy, RecentActivity } from './store'
import { CommerceUIStore } from './store'
import conf from './conf'

// https://dev.to/ivandotv/mobx-server-side-rendering-with-next-js-4m18
enableStaticRendering(typeof window === "undefined")

const CommerceUIContext = createContext<CommerceUIStore | undefined>(undefined)

const useCommerceDrawer = (): CommerceDrawer => {
  return useContext(CommerceUIContext) as CommerceDrawer
}

const useSelectAndBuy = (): SelectAndBuy => {
  return useContext(CommerceUIContext) as SelectAndBuy
}

const useRecentActivity = (): RecentActivity => {
  return useContext(CommerceUIContext) as RecentActivity
}

const CommerceUIProvider: React.FC<PropsWithChildren> = ({ 
  children,
}) => {

  const cmmc = useCommerce()
  const pathName = usePathname()
  const isCheckout = pathName === '/checkout'
  const ref = useRef<CommerceUIStore>(new CommerceUIStore(cmmc, conf))

  if (ref.current.checkingOut != isCheckout) {
    ref.current.setCheckingOut(isCheckout)
  }

  const onResize = () => { 
    const width = window.innerWidth 
    let desktopMin = 0
    if (twConfig.theme?.screens) {
        // expected form: { md: '768px' }
      if ('md' in twConfig.theme?.screens && typeof twConfig.theme?.screens.md === 'string') {
        desktopMin = parseInt(twConfig.theme?.screens.md)
      }
      if (width < desktopMin) {
        if (!ref.current.isMobile) {
          ref.current.setMobile(true)
        }
      }
      else if (ref.current.isMobile) {
        ref.current.setMobile(false)
      }
    }
    ref.current.setViewportHeight(window.innerHeight)
  }

  const onResize_debounced = useDebounceCallback(onResize, 500)

  useLayoutEffect(() => {
    ref.current.initialize()
    onResize()
    window.addEventListener('resize', onResize_debounced);
    return () => {
      window.removeEventListener('resize', onResize_debounced)
      ref.current.dispose() 
    }
  }, [])

  useEffect(() => {
    ref.current.reset()
  }, [pathName])


  return (
    <CommerceUIContext.Provider value={ref.current}>
      {children}
    </CommerceUIContext.Provider>
  )
}

export {
  useCommerceDrawer, 
  useSelectAndBuy,
  useRecentActivity,
  CommerceUIProvider
}

