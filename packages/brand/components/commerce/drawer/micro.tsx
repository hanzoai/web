'use client'
import React from 'react'
import { observer } from 'mobx-react-lite'

import { Button, Image } from '@hanzo/ui/primitives'
import { cn,  } from '@hanzo/ui/util'
import type { LineItem } from '@hanzo/commerce/types'
import { useCommerce, formatCurrencyValue } from '@hanzo/commerce'

import CheckoutButton from '../checkout-button'
import { useCommerceDrawer, useRecentActivity } from '../../../commerce/ui/context'

const CN = {
    // h: mind padding!
  mobile: { w: 36, h: 32 },
  sm:  { w: 60, h: 34 },
  desktop: { w: 60, h: 32 },
}

const Info: React.FC<{
  item: LineItem
  clx?: string
}> = ({
  item,
  clx=''
}) => {

  const cmmc = useCommerce()
  const family = cmmc.getFamilyById(item.familyId)

  let topLine = family!.title
  if (item.sku.startsWith('LXM-AG') || item.sku.startsWith('LXM-AU')) {
    topLine = family!.parentTitle + ', ' + family!.title   
  }

  const optionLabel = item.optionLabelShort ?? item.optionLabel
  const priceStr = formatCurrencyValue(item.price)

  return (<>
    <div className={cn('sm:hidden flex flex-col !text-muted items-stretch whitespace-nowrap text-ellipsis ', clx)}>
      <p className='text-left text-xs'>{topLine}</p>
      <div className='flex justify-between text-xxs'>
        <div>{optionLabel}</div>
        <div className='pl-2.5'>{priceStr}</div>
      </div>
    </div>
    <div className={cn('hidden sm:flex !text-muted  flex-col items-stretch whitespace-nowrap text-ellipsis text-xs', clx)}>
      <p className='text-left'>{topLine}</p>
      <div className='flex justify-between'>
        <div>{optionLabel}</div>
        <div className='pl-2.5'>{priceStr}</div>
      </div>
    </div>
  </>)
}

const PROMPT_COMMON_CLX = 'block absolute top-0 left-0 bg-transparent duration-400 transition-opacity' 

const Micro: React.FC<{
  clx?: string
  handleCheckout: () => void
  handleItemClicked: () => void 
}> = observer(({
  clx='',
  handleCheckout,
  handleItemClicked 
}) => {

  const drawer = useCommerceDrawer()
  const recent = useRecentActivity()
  const mobile = drawer.isMobile

  return (        
    <div className={cn(
      (drawer.showAdded ? 'grid grid-cols-2' : 'flex justify-center items-center '),
      (drawer.showAdded ? ((drawer.isMobile) ? '-mt-3' : '-mt-3') : ''),
      'gap-2 md:gap-3 relative',
      clx
    )}>
    {drawer.showAdded && (
      <div className={'flex flex-col items-stretch ' + (drawer.isMobile ? 'justify-start' : 'group')}>
        <p className={'relative text-muted text-xxs md:text-xs leading-none pl-1 self-start ' + (drawer.isMobile ? 'top-[3px]' : 'top-[1px]')}>
          <span className='invisible'>scrictly for layout</span>
          {drawer.isMobile ? (
            <span className={PROMPT_COMMON_CLX}>tap for options:</span>
          ) : (<>
            <span className={PROMPT_COMMON_CLX + ' group-hover:opacity-0'}>recent item:</span>
            <span className={PROMPT_COMMON_CLX + ' opacity-0 group-hover:opacity-100'}>view options:</span>
          </>)}
        </p>
        <Button 
          variant='ghost'
          rounded={drawer.isMobile ? 'md' : 'lg'}
          size={drawer.isMobile ? 'default' : 'lg'}
          onClick={handleItemClicked}
          className={cn(
            'box-content',
            'flex flex-row justify-between items-center gap-1',
            '-ml-1.5',
            'overflow-hidden ', 
            'px-1 md:px-2 py-[2px]',
            'border border-transparent group-hover:border-muted-3',
            'group-hover:!bg-transparent '
          )}
        >
          {recent.item?.img && (<>
            <Image def={recent.item.img} constrainTo={CN.mobile} preload className='sm:hidden grow-0 shrink-0'/>
            <Image def={recent.item.img} constrainTo={CN.sm} preload className='hidden sm:block md:hidden grow-0 shrink-0'/>
            <Image def={recent.item.img} constrainTo={CN.desktop} preload className='hidden md:block grow-0 shrink-0'/>
          </>)} 
          {recent.item && (
            <div className='grow w-full'>
              <Info item={recent.item} clx='w-full'/>
            </div>
          )}
        </Button>
      </div>
    )}
    {drawer.showCheckout && (
      <div className={cn(
        'flex flex-col w-full', 
        (drawer.showAdded ? 'items-stretch' : 'items-center' ),
        (drawer.isMobile ? 'justify-start' : 'justify-center')
      )}>
        {drawer.showAdded && <p className='invisible text-muted text-xxs md:text-xs leading-none pl-1 self-start'>for layout</p>}
        <CheckoutButton 
          handleCheckout={handleCheckout} 
          variant='primary' 
          size={drawer.isMobile ? 'default' : 'lg'}
          rounded={drawer.isMobile ? 'md' : 'lg'}
          centerText={drawer.isMobile ? !drawer.showAdded : true}
          className={cn(drawer.isMobile ? 
            (drawer.showAdded ? 'pl-3.5 pr-2.5' : 'min-w-[320px]')
            :
            (drawer.showAdded ? '' : 'w-[320px]')
          )} 
        />
      </div>
    )}
    </div>
  )
})

export default Micro
