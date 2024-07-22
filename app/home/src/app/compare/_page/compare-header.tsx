'use client'
import React, { useEffect, useState } from 'react'

import { cn } from '@hanzo/ui/util'

import { type CardWithSelectedMaterial } from '@luxfi/data/commerce/types'
import SelectCardRow from './select-card-row'

const CompareHeader: React.FC<{
  selectedCards: CardWithSelectedMaterial[]
  setSelectedCards: (cards: CardWithSelectedMaterial[]) => void
}> = ({
  selectedCards,
  setSelectedCards,
}) => {
  const [showHeader, setShowHeader] = useState<boolean>(false)

  useEffect(() => {
    const onScroll = () => {
      const element = document.getElementById('benefits')
      if (element) {
        setShowHeader(element.getBoundingClientRect().top < 0)
      }
    }

    document.addEventListener('scroll', onScroll)
    return () => {
      document.removeEventListener('scroll', onScroll)
    }
  }, [])
  
  return (
    <div className={cn(
      showHeader ? 'opacity-100 top-0' : 'opacity-0 -top-30', 
      'fixed w-full px-4 pb-3 bg-background mt-11 md:mt-20 transition-all'
    )}>
      <SelectCardRow selectedCards={selectedCards} setSelectedCards={setSelectedCards} condensed/>
    </div>
  )
}

export {
  CompareHeader as default,
}