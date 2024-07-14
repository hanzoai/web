import type { VideoDef } from '@hanzo/ui/types'

import bullionByFamily from './AUTO-GEN-bullion-by-family.json'

import assignPrices from './assign-prices'
import assignVideosByFamilyGroup from './assign-videos-by-family-group'

export const getBullionFamilies = (videoMap: Map<string, VideoDef>) => (
  bullionByFamily.map(
    (fam) => (assignPrices(fam))).map(
      (fam) => (assignVideosByFamilyGroup(fam, videoMap)
    )
  )
)

export { default as bullionPrice1oz } from './bullion-price-1oz'

