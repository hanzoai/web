'use client'
import React, { useState, useEffect } from 'react'
import { useRouter } from 'next/navigation'

import type { LinkDef } from '@hanzo/ui/types'
import { cn } from '@hanzo/ui/util'

import { CartPanel, useCommerce } from '@hanzo/commerce'
import { AuthWidget, LoginPanel } from '@hanzo/auth/components'
import sendGAEvent from '../../next/analytics/google-analytics'
import * as Icons from '../icons'

import { Logo } from '..'

import MenuToggleButton from '../commerce/mobile-menu-toggle-button'
import BagButton from '../commerce/bag-button'
import MobileBagDrawer from '../commerce/mobile-bag-drawer'
import NavMenu from '../commerce/mobile-nav-menu'

const bagClx = 'mt-4 mb-8 border-none py-0 px-4 w-full ' +
  'sm:min-w-[350px] sm:max-w-[500px] sm:mx-auto min-h-[60vh] max-h-[70vh] ' +
  'sm:animate-in sm:zoom-in-90 '

const MobileHeader: React.FC<{
  currentAs: string | undefined
  links: LinkDef[]
  className?: string,
  setChatbotOpen: (open: boolean) => void,
}> = ({
  currentAs,
  links,
  className = '',
  setChatbotOpen,
}) => {
    const cmmc = useCommerce()
    const [menuState, setMenuState] = useState<'closed' | 'nav' | 'login' | 'bag'>('closed')
    const [bagDrawerOpen, setBagDrawerOpen] = useState<boolean>(false)
    const router = useRouter()

    useEffect(() => {
      if (menuState === 'bag' || bagDrawerOpen) {
        sendGAEvent('view_cart', {
          items: cmmc.cartItems.map((item) => ({
            item_id: item.sku,
            item_name: item.title,
            item_category: item.familyId,
            price: item.price,
            quantity: item.quantity
          })),
          value: cmmc.cartTotal,
          currency: 'USD',
        })
      }
    }, [menuState, bagDrawerOpen])

    const menuOpen = () => (menuState !== 'closed')

    const onLoginChanged = (token: string) => {
      // by def, menu was in state 'login'
      if (!!token) { setMenuState('nav') }
    }

    const setMenuOpen = (open: boolean) => {
      if (!open) {
        setMenuState('closed')
      }
      else {
        setMenuState('nav')
      }
    }

    const handleCheckout = () => {
      setMenuState('closed')
      setBagDrawerOpen(false)
      router.push('/checkout')
    }

    const openBag = () => {
      if (menuOpen()) {
        setMenuState('bag')
      }
      else {
        setBagDrawerOpen(true)
      }
    }
    // header element MUST be fixed, and NOT sticky.  Or else drawer breaks on mobile browsers
    return (<>
      <header className={cn(
        `bg-background fixed z-header top-0 left-0 w-full h-19 ${menuOpen() ? 'hidden' : 'block'}`,
        className
      )}>
        {/* smaller than md: mobile style drawer menu; h-11 is 44px, the standard mobile header height */}
        <div className="flex h-11 items-center justify-between pl-6 pr-4">
          <div className='h-[74px] w-pr-100 flex flex-row justify-between items-center font-bold'>
            <Logo href='/' size='sm' className={'top-[3px] h-full'} layout='text-only' />
            {/* Not that key to the cross-fade effect 
              is that this is **on top of** the logo. */}
            {menuOpen() && (
              <div className={'absolute left-0 top-0 bottom-0 right-0 pl-8 ' +
              'flex flex-row ' +
              'bg-background animate-mobile-menu-open'
            }>
                <Icons.Avatar className='self-center ' />
              </div>
            )}
            <div className='flex gap-0 flex-row'>
              <BagButton className='text-primary -mr-[3px]' onClick={openBag} />
              <MenuToggleButton className='text-foreground' open={menuOpen()} setOpen={setMenuOpen} />
            </div>

          </div>

        </div>
      </header>
      <MobileBagDrawer
        className=''
        open={bagDrawerOpen}
        setOpen={setBagDrawerOpen}
        handleCheckout={handleCheckout}
      />
      {menuOpen() && (
        <div className={
          'fixed top-0 left-0 w-full h-full ' +
          // z must below header itself
          'flex flex-column bg-background z-below-header animate-mobile-menu-open'
        }>
          {menuState === 'login' ? (
            <LoginPanel noHeading onLoginChanged={onLoginChanged} className='sm:animate-in sm:zoom-in-90' />
          ) : (
            menuState === 'bag' ? (

              <CartPanel
                handleCheckout={() => { router.push('/checkout') }}
                className={bagClx}
                listClx='rounded-sm'
                scrollAfter={6}
                scrollHeightClx='h-[80vh]'
                itemClx='mt-2'
                totalClx='sticky px-1 pr-2 border rounded-sm -bottom-[1px] bg-level-1'
                buttonClx='max-w-[220px] flex-none'
              >
                <div className='flex flex-row items-center flex-none justify-center '>
                  <Icons.bag className='mr-2 relative w-4 h-5 fill-foreground ' />
                  <p className='font-heading text-foreground text-default'>Your Bag</p>
                </div>
                <div className='h-[1px] w-pr-80 bg-muted-3 mx-auto mt-1.5 flex-none' />
              </CartPanel>

            ) : ( /* menuState === 'nav' */
              <NavMenu
                currentAs={currentAs}
                links={links}
                className='sm:animate-in sm:zoom-in-90 w-full'
                commonItemClx='px-0 text-xl h-16 justify-start '
                setMenuState={setMenuState}
                setChatbotOpen={setChatbotOpen}
                setMenuOpen={setMenuOpen}
              />
            )
          )}
        </div>
      ) /* menuOpen */}
    </>)
  }

export default MobileHeader
