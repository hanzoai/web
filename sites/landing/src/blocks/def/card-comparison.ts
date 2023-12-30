import type { CardFamily } from '@luxfi/data/commerce/types'
import type { Block } from '@hanzo/ui/blocks'

interface CardComparisonBlock extends Block {
  blockType: 'card-comparison'
  cards: CardFamily[] 
}

export {
  type CardComparisonBlock as default
}
