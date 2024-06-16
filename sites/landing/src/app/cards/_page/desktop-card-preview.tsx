'use client'

import { useEffect, useState } from 'react'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import { ChevronDown } from 'lucide-react'

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  ApplyTypography,
  Button
} from '@hanzo/ui/primitives'
import {
  AddToCartWidget,
  formatCurrencyValue,
  useCommerce
} from '@hanzo/commerce'
import type { LineItem } from '@hanzo/commerce/types'
import { ImageBlockComponent } from '@hanzo/ui/blocks'
import { cn } from '@hanzo/ui/util'

import type { Card, CardMaterial } from '@luxfi/data/commerce/types'

import CardQuickView from './card-quick-view'
import CardMaterialPicker from '@/components/card-material-picker'

const CardPreview: React.FC<{
  card: Card
}> = ({
  card,
}) => {
  const router = useRouter()
  const cmmc = useCommerce()
  const [showQuickView, setShowQuickView] = useState<boolean>(false)
  const [lineItem, setLineItem] = useState<LineItem>()
  const [selectedMaterial, setSelectedMaterial] = useState<CardMaterial>(card.materials[0])

  useEffect(() => {
    if (selectedMaterial) {
      cmmc.selectPath(selectedMaterial.sku)
      setLineItem(cmmc.selectedItems.find(item => item.sku === selectedMaterial.sku))
    }
  }, [selectedMaterial])

  if (!selectedMaterial) {
    return null
  }

  return (
    <div className='flex flex-col gap-10'>
      <div className='grid grid-cols-4 gap-10'>
        <div className='flex flex-col gap-5 items-center col-span-1'>
          <Link href={`/cards/${card.category}?sku=${selectedMaterial.sku}`}>
            <ImageBlockComponent
              block={{blockType: 'image', ...selectedMaterial.cardImg}}
              className='w-pr-80'
            />
          </Link>
          <CardMaterialPicker
            materials={card.materials}
            selectedMaterial={selectedMaterial}
            onChange={setSelectedMaterial}
          />
          {lineItem && <AddToCartWidget item={lineItem} className='w-fit'/>}
          <ApplyTypography className='flex flex-col !gap-2 items-center'>
            <Link href=''>Offer & Benefit Terms</Link>
            <Link href=''>Rates and Fees</Link>
          </ApplyTypography>
        </div>

        <div className='flex flex-col gap-10 col-span-2'>
          <ApplyTypography className='flex flex-col !gap-2'>
            <Link href={`/cards/${card.category}?sku=${selectedMaterial.sku}`} className='font-heading text-xl w-fit !no-underline'>
              {card.title}
            </Link>
            <p className='text-sm'>{selectedMaterial?.title}</p>
            <div className='flex flex-col text-sm'>
              <div><span className='font-bold'>Annual Fee:</span> {formatCurrencyValue(card.annualFee)}</div>
              <div><span className='font-bold'>Initiation Fee:</span> {formatCurrencyValue(card.initiationFee)}</div>
            </div>
          </ApplyTypography>
          <ApplyTypography className='flex flex-col !gap-2'>
            {card.preview}
          </ApplyTypography>
        </div>

        <div className='flex flex-col gap-4 col-span-1'>
          <ApplyTypography className='flex flex-col !gap-2 typography-p:text-sm'>
            <p className='font-bold'>Rewards with every purchase.</p>
            <div className='flex flex-col gap-2'>
              {card.karmaRewards.map(({multiplier, description}, i) => (
                <p key={i}><span className='font-bold'>{multiplier}X points</span> {description}</p>
              ))}
            </div>
          </ApplyTypography>
          <div className='flex flex-col-reverse xl:flex-row gap-2'>
            <Button
              variant='outline'
              onClick={() => setShowQuickView(!showQuickView)}
              className='flex gap-1 items-center w-full !min-w-0 !text-xs lg:!text-base'
            >
              Quick View
              <ChevronDown className={cn('transition-all h-5 w-5', showQuickView ? 'rotate-180' : '')}/>
            </Button>
            <Button
              variant='outline'
              onClick={() => router.push(`/compare?cards=${selectedMaterial.sku}`)}
              className='w-full !min-w-0 !text-xs lg:!text-base'
            >
              Compare
            </Button>
          </div>
        </div>
      </div>

      <Accordion
        type='single'
        collapsible
        value={showQuickView ? 'quickView' : ''}
      >
        <AccordionItem value='quickView'>
          <AccordionContent>
            <CardQuickView card={card} selectedMaterial={selectedMaterial}/>
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </div>
  )
}

export {
  CardPreview as default
}
