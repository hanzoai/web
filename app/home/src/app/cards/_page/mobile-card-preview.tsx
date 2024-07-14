'use client'

import { useState } from 'react'
import Link from 'next/link'
import { ArrowRight } from 'lucide-react'

import { formatCurrencyValue } from '@hanzo/commerce'
import { ImageBlockComponent } from '@hanzo/ui/blocks'

import type { Card, CardMaterial } from '@luxfi/data/commerce/types'
import CardMaterialPicker from '@/components/card-material-picker'

const CardPreview: React.FC<{
  card: Card
}> = ({
  card,
}) => {
  const [selectedMaterial, setSelectedMaterial] = useState<CardMaterial>(card.materials[0])

  if (!selectedMaterial) {
    return null
  }

  return (
    <div className='grid grid-cols-7 gap-2 py-5 px-4'>
      <div className='flex flex-col gap-2 col-span-3 items-center'>
        <Link href={`/cards/${card.category}?sku=${selectedMaterial.sku}`}>
          <ImageBlockComponent
            block={{blockType: 'image', ...selectedMaterial.cardImg}}
            className='w-pr-90'
          />
        </Link>
        <p className='text-xxs sm:text-xs text-center'>{selectedMaterial.title}</p>
      </div>
      <div className='flex flex-col h-auto justify-between col-span-4 sm:p-3'>
        <Link
          href={`/cards/${card.category}?sku=${selectedMaterial.sku}`}
          className='flex justify-between items-center cursor-pointer'
        >
          <span className='sm:!text-lg'>{card.title}</span>
          <ArrowRight/>
        </Link>
        <div className='flex gap-2 items-center'>
          <CardMaterialPicker
            materials={card.materials}
            selectedMaterial={selectedMaterial}
            onChange={setSelectedMaterial}
            materialClx='h-5 w-5 sm:h-9 sm:w-9'
          />
          <div className='flex flex-col text-xxs sm:text-xs ml-auto'>
            <div><span className='font-bold'>Annual Fee:</span> {formatCurrencyValue(card.annualFee)}</div>
            <div><span className='font-bold'>Initiation Fee:</span> {formatCurrencyValue(card.initiationFee)}</div>
          </div>    
        </div>
      </div>
    </div>
  )
}

export {
  CardPreview as default
}