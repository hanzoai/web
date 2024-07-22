'use client'

import { useRouter } from 'next/navigation'

import { ApplyTypography, Button } from '@hanzo/ui/primitives'
import { cn } from '@hanzo/ui/util'

import type { Card, CardMaterial } from '@luxfi/data/commerce/types'

const CardQuickView: React.FC<{
  card: Card,
  selectedMaterial: CardMaterial,
  className?: string
}> = ({
  card,
  selectedMaterial,
  className
}) => {
  const router = useRouter()

  return (
    <ApplyTypography className={cn('flex flex-col !gap-12 py-6 typography-p:text-sm lg:typography-p:text-base', className)}>
      <h3>{card.title}</h3>
      <div className='grid grid-cols-4 gap-6'>
        {card.quickview.row1.map((row, i) => (
          <div key={i} className='flex flex-col gap-2'>
            {row}
          </div>
        ))}
      </div>
      <div className='grid grid-cols-4 gap-6'>
        {card.quickview.row2.map((row, i) => (
          <div key={i} className='flex flex-col gap-2'>
            {row}
          </div>
        ))}
        <div className='flex flex-col gap-2'>
          <Button
            variant='outline'
            onClick={() => router.push(`/cards/${card.category}?sku=${selectedMaterial.sku}`)}
          >
            More Details
          </Button>
          <Button
            variant='outline'
            onClick={() => router.push(`/compare?cards=${selectedMaterial.sku}`)}
          >
            Compare Cards
          </Button>
        </div>
      </div>
    </ApplyTypography>
  )
}

export {
  CardQuickView as default
}