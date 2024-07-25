import { useEffect, useRef } from 'react'
import { reaction, runInAction} from 'mobx'

import { useCommerce } from '@hanzo/commerce'

import ObsStringSet from './obs-string-set'
import { useSelectAndBuy } from '../../../commerce/ui/context'

export default (isCheckout: boolean): ObsStringSet => {

  const ui = useSelectAndBuy()
  const cmmc = useCommerce()

  const clxSetRef = useRef<ObsStringSet>(new ObsStringSet(
    (cmmc.cartEmpty || ui.currentSkuPath || isCheckout) ? ['hidden'] : []
  ))

  useEffect(() => (
    reaction(
      () => ({
        microOpen: !(cmmc.cartEmpty || !!ui.currentSkuPath || isCheckout),
        buyOpen: !!ui.currentSkuPath
      }),
      (val, prev) => {

        runInAction(() => {
          if (!val.microOpen && prev.microOpen) {
            clxSetRef.current.add('checkout-widget-disappears')   
          }
          else if (val.microOpen && !prev.microOpen) {
            clxSetRef.current.remove('hidden')   
            clxSetRef.current.add('checkout-widget-appears')   
          }
          if (!val.buyOpen && prev.buyOpen) {
            clxSetRef.current.add('checkout-widget-appears-after-buy-drawer-closes')   
          }
          else {
            clxSetRef.current.remove('checkout-widget-appears-after-buy-drawer-closes')   
          }
        })

        setTimeout(() => {runInAction(() => {
          clxSetRef.current.remove(['checkout-widget-appears', 'checkout-widget-appears-after-buy-drawer-closes'])   
          if (clxSetRef.current.has('checkout-widget-disappears') ) {
            clxSetRef.current.remove('checkout-widget-disappears')   
            clxSetRef.current.add('hidden')   
          }
        })}, 800)
      },
      {equals: (val, prev) => (
        val.microOpen === prev.microOpen 
        && 
        val.buyOpen === prev.buyOpen
      )}
    )
  ), [isCheckout])

  return clxSetRef.current
}