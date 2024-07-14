import type { CardType } from '@luxfi/data/commerce/types'

export const getProductHeading = (product: CardType): string => (
  `lux ${product} card`.toUpperCase()
)

