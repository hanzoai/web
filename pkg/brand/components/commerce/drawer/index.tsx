'use client'
import React from 'react'
import { useRouter } from 'next/navigation'
import { observer } from 'mobx-react-lite'

import { CarouselBuyCard } from '@hanzo/commerce'

import { 
  useSelectAndBuy, 
  useCommerceDrawer, 
} from '../../../commerce/ui/context'

import CommerceDrawer from './shell'
import CheckoutButton from '../checkout-button'
import Micro from './micro'

const CommerceUIComponent: React.FC = observer(() => {

  const buy = useSelectAndBuy()
  const drawer = useCommerceDrawer()
  const router = useRouter()

  const handleCheckout = (): void => {
    router.push('/checkout')
  }

  const handleHandleClicked = (): void => {

    if (drawer.state === 'full') {
      buy.hideVariants()
    }
    else if (drawer.state === 'micro') {
      buy.showRecentVariants()
    }
  }

  const handleItemClicked = () => {
    buy.showRecentVariants()
  }

  const handleCloseGesture = (): boolean => {
    if (drawer.state === 'full') {
      buy.hideVariants()
      return true // "handled!"
    }
    return false
  }

  return (
    <CommerceDrawer 
      handleHandleClicked={handleHandleClicked}
      handleCloseGesture={handleCloseGesture}
      drawerClx='flex flex-col'
    >
      {drawer.state === 'full' && (
        /* The actual drawer is larger than the visible area (due to awkward
        vaul impl.  So we have to ask the drawer for its currect snappoint 
        and constrain layout to that.  
        */
        <div style={{height: drawer.snapPointPx - 24 /* fudge factor for handle area */}} >
          <CarouselBuyCard 
            skuPath={buy.currentSkuPath!} 
            checkoutButton={
              <CheckoutButton 
                handleCheckout={handleCheckout} 
                className='w-full min-w-[160px] sm:max-w-[320px]'
              />
            }
            clx='justify-between h-full pb-3 gap-8'
            addBtnClx='w-full min-w-[160px] sm:max-w-[320px]' 
            buttonsAreaClx='grow-0 shrink-0 mt-0'
            selectorClx='max-w-[475px] justify-between grow'
            
          />
        </div>
      )}
      {drawer.state === 'micro' && (
        <Micro 
          handleCheckout={handleCheckout}
          handleItemClicked={handleItemClicked}
          clx='w-full px-2 sm:w-[460px] sm:mx-auto md:w-[550px]'
        />
      )}
    </CommerceDrawer>
  )
})

export default CommerceUIComponent
