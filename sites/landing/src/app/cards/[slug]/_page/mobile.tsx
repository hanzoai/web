'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import Link from 'next/link'
import { ChevronLeft } from 'lucide-react'

import { cn } from '@hanzo/ui/util'
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
  ApplyTypography,
} from '@hanzo/ui/primitives'

import { AddToCartWidget, formatCurrencyValue } from '@hanzo/commerce'
import type { LineItem } from '@hanzo/commerce/types'

import { Main } from '@hanzo/brand'
import type { Card, CardMaterial } from '@luxfi/data/commerce/types'

import SplinePlayer from '@/components/spline-player'
import CardMaterialPicker from '@/components/card-material-picker'
import MoreWaysToEarn from './more-ways-to-earn'
import Arrow from '@/content/cards/benefits/icons/arrow'

const MobileViewCardDetails: React.FC<{
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
    <Main className={cn('flex flex-col gap-4 pt-11', clx)}>
      <div className='flex gap-1 items-center self-start cursor-pointer' onClick={() => router.push('/cards')}>
        <ChevronLeft/>
        <div>View All Cards</div>
      </div>
      <div className='flex flex-col gap-4 items-center'>
        <ApplyTypography className='flex flex-col gap-2 items-center w-full'>
          <h3 className='!text-2xl'>{card.title}</h3>
          <div className='flex justify-center gap-3 text-sm w-full'>
            <div><span className='font-bold'>Annual Fee:</span> {formatCurrencyValue(card.annualFee)}</div>
            <div><span className='font-bold'>Initiation Fee:</span> {formatCurrencyValue(card.initiationFee)}</div>
          </div>
          <div className={cn(
              'w-full h-auto !aspect-[1920/1080] transition-all duration-300',
              showAnimation ? 'opacity-100' : 'opacity-0',
            )}
          >
            <SplinePlayer src={currentAnimation} className='!aspect-[1920/1080]'/>
          </div>
          <CardMaterialPicker
            materials={card.materials}
            selectedMaterial={selectedMaterial}
            onChange={changeSelectedMaterial}
          />
          <p className='text-sm'>{selectedMaterial?.title}</p>
        </ApplyTypography>

        {lineItem && <AddToCartWidget item={lineItem} className='w-fit mx-auto'/>}

        <Accordion type='multiple' className='w-full'>
          {card.cardDetails.intro.map(({title, description}, i) => (
            <AccordionItem key={i} value={title} className='border-none bg-level-1 my-2 rounded'>
              <AccordionTrigger showChevron className='!no-underline px-3 !py-1 h-14'>
                <h5 className='text-sm text-left'>{title}</h5>
              </AccordionTrigger>
              <AccordionContent className='px-3 pb-3'>{description}</AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
        <MoreWaysToEarn rewards={card.karmaRewards} clx='pt-6'/>
        <Link href='/cards/benefits' className='flex gap-4 px-4 pt-6 w-full text-center underline cursor-pointer whitespace-nowrap'>
          View All Lux Benefits
          <Arrow/>
        </Link>
      </div>
    </Main>
  )
}

export {
  MobileViewCardDetails as default
}