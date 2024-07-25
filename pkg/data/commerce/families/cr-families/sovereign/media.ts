import type { ImageDef } from "@hanzo/ui/types"
import { ProductMediaAccessor } from '@hanzo/commerce'


export default new ProductMediaAccessor({
  img: {
    'LXM-CR-S': {
      src: 'https://cdn.lux.network/commerce/cr/family/cards-2-flat-tit-1593x1231.png', 
      dim: {w: 1593, h: 1231}
    } satisfies ImageDef,
    'LXM-CR-S-RT': {
      src: 'https://cdn.lux.network/commerce/cr/product/titanium-f-700x442.png', 
      dim: {w: 700, h: 442}
    } satisfies ImageDef,
  },
  optionImg: {
    'LXM-CR-S-RT': { 
      src: 'https://cdn.lux.network/commerce/cr/product/option/sovereign-card-reflective-titanium-100x99.png', 
      dim: {w: 100, h: 99},
      rounded: 'full'
    } satisfies ImageDef,
  },
  anim: {
    'LXM-CR-S-RT': 'https://prod.spline.design/gLe0xmFfLrftccCc/scene.splinecode',
  }
})