'use client'
import React from 'react'
import { observer } from 'mobx-react-lite'

import { 
  useCommerce, 
  CarouselItemSelector, 
  type CarouselItemSelectorPropsExt 
} from '@hanzo/commerce'

const DesktopBagCarousel: React.FC<{
  constrainTo: {w: number, h: number}
  className?: string
}> = observer(({
  constrainTo,
  className=''
  
}) => {
  const cmmc = useCommerce()
  return (
    <CarouselItemSelector 
      items={cmmc.cartItems} 
      selectedItemRef={cmmc}
      scrollable={false} // ignored
      selectSku={cmmc.setCurrentItem.bind(cmmc)}
      clx={className}
      ext={{
        options: {loop: true},  
        constrainTo,  
        imageOnly: true
      } satisfies CarouselItemSelectorPropsExt}
    />
  )
})

export default DesktopBagCarousel
