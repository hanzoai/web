import React from 'react'
import { type CardWithSelectedMaterial } from '@luxfi/data/commerce/types'

import { NUM_CARDS_DESKTOP, NUM_CARDS_MOBILE } from '../CONST'
import RowHeading from '../row-heading'
import SelectCard from './select-card'
import CardHero from './card-hero'

const SelectCardRow: React.FC<{
  selectedCards: CardWithSelectedMaterial[]
  setSelectedCards: (cards: CardWithSelectedMaterial[]) => void
  condensed?: boolean
}> = ({
  selectedCards,
  setSelectedCards,
  condensed,
}) => {
  return (
    <div className='grid grid-cols-2 lg:grid-cols-11 gap-8 sm:gap-10 items-start'>
      {condensed ? (
        <div className='hidden lg:block lg:col-span-2'></div>
      ) : (
        <RowHeading
          title='Compare'
          description='These offers may not be available if you leave this web page and return later.'
          clx='col-span-2 self-start text-center lg:text-left typography-h4:!text-3xl'
        />
      )}
      {[...Array(NUM_CARDS_DESKTOP)].map((_, i) => ( (selectedCards[i]) ? (
        <CardHero
          key={i}
          card={selectedCards[i]}
          selectedCards={selectedCards}
          setSelectedCards={setSelectedCards}
          hiddenOnMobile={i > NUM_CARDS_MOBILE - 1}
          condensed={condensed}
        />
      ) : (
        <SelectCard
          key={i}
          selectedCards={selectedCards}
          setSelectedCards={setSelectedCards}
          hiddenOnMobile={i > NUM_CARDS_MOBILE - 1}
          condensed={condensed}
        />
      )))}
    </div>
  )
}

export {
  SelectCardRow as default,
}