'use client'

import { useRouter } from 'next/navigation'

import { Button } from '@hanzo/ui/primitives'
import { ImageBlockComponent, type ImageBlock } from '@hanzo/ui/blocks'
import { cn } from '@hanzo/ui/util'

import PseudoMain from '@/components/pseudo-main'

import type { Card } from '@luxfi/data/commerce/types'
import cards from '@/content/cards'

const CardsBar: React.FC<{
  selectedCard?: Card,
  clx?: string
}> = ({
  selectedCard,
  clx
}) => {
  const router = useRouter()

  return (
    <div className={cn('hidden sm:flex w-full bg-background transition-all', clx)}>
      <PseudoMain className='grid grid-cols-4 w-full gap-4 px-2'>
        {cards.map((card, index) => (
          <Button
            key={index}
            variant='ghost'
            onClick={() => router.replace(`/cards/${card.category}`)}
            className={cn(
              'flex gap-2 justify-start items-center py-1 px-2 md:py-2 md:px-4 whitespace-break-spaces text-left h-full transition-all',
              card.category === selectedCard?.category ? 'outline outline-2 outline-foreground' : 'opacity-60 hover:opacity-100'
            )}
          >
            <ImageBlockComponent
              block={{blockType: 'image', ...card.materials[0].cardImg} satisfies ImageBlock}
              className='h-5 md:h-8 w-auto mx-0 my-auto'
            />
            <div className='text-xs md:text-sm lg:text-base'>{card.title}</div>
          </Button>
        ))}
      </PseudoMain>
    </div>
  )
}

export {
  CardsBar as default
}