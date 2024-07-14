import type { Family } from '@hanzo/commerce/types'

import prices from './EDIT-ME-bullion-market-prices'

const sep = {
  tok: '-',
  subTok: '_',
  decimal: '.'
} 

const GRAMS_PER_OZ = 28.3495

const tree: any = {}
for (let key in prices) {
  const values = prices[key as keyof typeof prices]
  tree[key] = {
    oz: values.market1oz * (1 - values.discount),
    g: values.market1oz * (1 - values.discount) / GRAMS_PER_OZ  
  }
}

// LXB-AU-B-1_OZ, LXB-AU-B-2.5_g
const priceFromSKU = (
  sku: string
) => {
  const tokens = sku.split(sep.tok)
  const type_ = tokens[1].toLowerCase()

  const quanAndUnit = tokens[tokens.length - 1]
  const quanAndUnitToks = quanAndUnit.split(sep.subTok)
  let quantity = quanAndUnitToks[0].includes(sep.decimal) ? parseFloat(quanAndUnitToks[0].split(sep.decimal).join('.')) : parseInt(quanAndUnitToks[0])
  let unit = quanAndUnitToks[1].toLowerCase()
  if (unit === 'kg') {
    quantity *= 1000
    unit = 'g'
  }
  else if (unit === 'lb') {
    quantity *= 16
    unit = 'oz'
  }

  return tree[type_][unit] * quantity
}

export default (c: Family): Family => {
  for (let prod of c.products) {
    prod.price = priceFromSKU(prod.sku)
  }
  return c
}