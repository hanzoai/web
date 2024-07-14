import PRICES from './EDIT-ME-bullion-market-prices'

export default (type_: keyof typeof PRICES): number => (
  PRICES[type_].market1oz * (1 - PRICES[type_].discount)  
)
