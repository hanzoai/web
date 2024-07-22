'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import { ChevronLeft } from 'lucide-react'

import { cn } from '@hanzo/ui/util'
import { ApplyTypography } from '@hanzo/ui/primitives'
import { AddToCartWidget, formatCurrencyValue } from '@hanzo/commerce'
import type { LineItem } from '@hanzo/commerce/types'

import { Main } from '@hanzo/brand'
import type { Card, CardMaterial } from '@luxfi/data/commerce/types'

import SplinePlayer from '@/components/spline-player'
import CardMaterialPicker from '@/components/card-material-picker'
import Benefits from './benefits'
import MoreWaysToEarn from './more-ways-to-earn'

const TabletViewCardDetails: React.FC<{
  card: Card
  lineItem: LineItem
  selectedMaterial: CardMaterial
  setSelectedMaterial: (material: CardMaterial) => void
  clx?: string
}> = ({
  card,
  lineItem,
  selectedMaterial,
  setSelectedMaterial,
  clx
}) => {
  const router = useRouter()

  const [showAnimation, setShowAnimation] = useState<boolean>(true)
  const [currentAnimation, setCurrentAnimation] = useState<string>(selectedMaterial.animation)

  // Smooth transition between animations when changing material
  const changeSelectedMaterial = (material: CardMaterial) => {
    if (material.title === selectedMaterial.title) {
      return
    }

    setSelectedMaterial(material)
    setShowAnimation(false)
    setTimeout(() => {
      setCurrentAnimation(material.animation)
      setTimeout(() => {
        setShowAnimation(true)
      }, 100)
    }, 300)
  }

  return (
    <Main className={cn('flex flex-col gap-4 pt-11 mt-20', clx)}>
      <div className='flex gap-1 items-center self-start cursor-pointer' onClick={() => router.push('/cards')}>
        <ChevronLeft/>
        <div>View All Cards</div>
      </div>
      <ApplyTypography className='grid grid-flow-row'>
        <div className={cn(
            'w-full transition-all duration-300',
            showAnimation ? 'opacity-100' : 'opacity-0',
          )}
        >
          <SplinePlayer src={currentAnimation} className='!aspect-[1920/1080]'/>
        </div>
        <div className='grid grid-cols-4'>
          <div className='flex flex-col justify-between col-span-2 gap-2'>
            <h3 className='!text-2xl self-start'>{card.title}</h3>
            <div className='flex flex-col text-sm'>
              <div><span className='font-bold'>Annual Fee:</span> {formatCurrencyValue(card.annualFee)}</div>
              <div><span className='font-bold'>Initiation Fee:</span> {formatCurrencyValue(card.initiationFee)}</div>
            </div>
          </div>
          <div className='flex flex-col justify-end col-span-1 gap-2'>
            <CardMaterialPicker
              materials={card.materials}
              selectedMaterial={selectedMaterial}
              onChange={changeSelectedMaterial}
            />
            <p className='text-xxs !text-center'>Choose Your Design</p>
          </div>
          <div className='flex flex-col justify-end col-span-1 gap-2'>
            <h5 className='col-span-1 !text-sm !text-right'>{selectedMaterial.title}</h5>
            <p className='text-xxs !text-right'>{card.rarity}</p>
          </div>
        </div>
        {lineItem && <AddToCartWidget item={lineItem} className='w-fit mx-auto'/>}
        <div className='flex flex-col gap-12'>
          {card.cardDetails.intro.map(({title, description}, i) => (
            <div key={i} className='flex flex-col'>
              <h5>{title}</h5>
              <p>{description}</p>
            </div>
          ))}
          <MoreWaysToEarn rewards={card.karmaRewards}/>
          <Benefits card={card} clx='mt-14'/>
        </div>
      </ApplyTypography>
    </Main>
  )
}

export {
  TabletViewCardDetails as default
}