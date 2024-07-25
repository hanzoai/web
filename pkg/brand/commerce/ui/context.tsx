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

import type { CommerceDrawer, SelectAndBuy } from './store'
import { CommerceUIStore } from './store'
import conf from './conf'

const LOG = false ////////////////////
const log = (s: string) => {
  if (LOG) {
    console.log('CMMC UI CONTEXT ' + s)
  }
}

// https://dev.to/ivandotv/mobx-server-side-rendering-with-next-js-4m18
enableStaticRendering(typeof window === "undefined")

const CommerceUIContext = createContext<CommerceUIStore | undefined>(undefined)

const useCommerceDrawer = (): CommerceDrawer => {
  return useContext(CommerceUIContext) as CommerceDrawer
}

const useSelectAndBuy = (): SelectAndBuy => {
  return useContext(CommerceUIContext) as SelectAndBuy
}

const CommerceUIProvider: React.FC<PropsWithChildren> = ({ 
  children,
}) => {

  const cmmc = useCommerce()
  const pathname = usePathname()
  const storeRef = useRef<CommerceUIStore>(new CommerceUIStore(cmmc, conf))
  const prevPathRef = useRef<string>('initial')

  const onResize = () => { 
    const width = window.innerWidth 
    let desktopMin = 0
    if (twConfig.theme?.screens) {
        // expected form: { md: '768px' }
      if ('md' in twConfig.theme?.screens && typeof twConfig.theme?.screens.md === 'string') {
        desktopMin = parseInt(twConfig.theme?.screens.md)
      }
      if (width < desktopMin) {
        if (!storeRef.current.isMobile) {
          storeRef.current.setMobile(true)
        }
      }
      else if (storeRef.current.isMobile) {
        storeRef.current.setMobile(false)
      }
    }
    storeRef.current.setViewportHeight(window.innerHeight)
  }

  const onResize_debounced = useDebounceCallback(onResize, 500)

  useLayoutEffect(() => {
    storeRef.current.initialize()
    onResize()
    window.addEventListener('resize', onResize_debounced);

    return () => {
      window.removeEventListener('resize', onResize_debounced)
      storeRef.current.dispose() 
    }
  }, [])

  useEffect(() => {
    const checkingOut = (pathname === '/checkout')

    /////////////////////////////////////
    log("useEffect: pathname: " + pathname)
    log("useEffect: prev pathname: " + prevPathRef.current)
    
    if (storeRef.current.checkingOut === undefined || storeRef.current._checkingOut!== checkingOut) {
      log("useEffect: setting checkingOut to: " + checkingOut) /////////////////////////////////////
      storeRef.current.setCheckingOut(checkingOut)
    }
    if ( prevPathRef.current === 'initial') {
      prevPathRef.current = pathname
      storeRef.current.newRoute()
    }
    else if (
      !checkingOut
      &&
      prevPathRef.current !== pathname
    ) {
      storeRef.current.newRoute()
      prevPathRef.current = pathname
      log("ROUTE CHANGE: " + pathname + ": " + storeRef.current._routeChangedTime)
    }  
  }, [pathname])


  return (
    <CommerceUIContext.Provider value={storeRef.current}>
      {children}
    </CommerceUIContext.Provider>
  )
}

export {
  useCommerceDrawer, 
  useSelectAndBuy,
  CommerceUIProvider
}

