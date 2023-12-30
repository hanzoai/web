import type { ImageDef } from "@hanzo/ui/types"
import { ProductMediaAccessor } from '@hanzo/commerce'


export default new ProductMediaAccessor({
  img: {
    'LXM-CR-E': { 
      src: '/assets/commerce/cr/family/cards-dual-gd-sl-1485x1114.png', 
      dim: { w: 1485, h: 1114 }
    } satisfies ImageDef,
    'LXM-CR-E-24G': {
      src: '/assets/commerce/cr/product/gold-f-700x442.png', 
      dim: {w: 700, h: 442}
    } satisfies ImageDef,
    'LXM-CR-E-SS': {
      src: '/assets/commerce/cr/product/silver-f-700x441.png', 
      dim: {w: 700, h: 441}
    } satisfies ImageDef,
  },
  optionImg: {
    'LXM-CR-E-24G': { 
      src: '/assets/commerce/cr/product/option/elite-card-gold-100x99.png', 
      dim: {w: 100, h: 99},
      rounded: 'full'
    } satisfies ImageDef,
    'LXM-CR-E-SS': { 
      src: '/assets/commerce/cr/product/option/elite-card-silver-99x99.png', 
      dim: {w: 99, h: 99},
      rounded: 'full'
    } satisfies ImageDef,
  },

  anim: {
    'LXM-CR-E-24G': 'https://prod.spline.design/YaHS6YD1dQbaxp4W/scene.splinecode',
    'LXM-CR-E-SS': 'https://prod.spline.design/sKvZa9cmo3oDBIuA/scene.splinecode'
  }
})