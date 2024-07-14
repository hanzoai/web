import type { VideoDef } from '@hanzo/ui/types'
import type { Family } from '@hanzo/commerce/types'

export default (fam: Family, map: Map<string, VideoDef>): Family => {
  if (fam.parentTitle) {
    for (let prod of fam.products) {
      const video = map.get(fam.parentTitle)
      if (video) {
        prod.video = video
      }
    }
  }
  return fam
}
