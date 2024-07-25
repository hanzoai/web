import type { Product, Family } from '@hanzo/commerce/types'
import { coin as video } from './videos'
import type { ImageDef } from '@hanzo/ui/types'

const CN_IMG = '/assets/commerce/cn/product/lux-coin-800x800.png'
const CN_IMG_DEF = {
  src: CN_IMG, 
  dim: { w: 800, h: 800},
  rounded: 'full'
} satisfies ImageDef

const COIN = 0.0011

const K = 1000
const M = 1000 * K
const B = 1000 * M

export default {
  id: 'LXM-CN',
  title: 'Lux Coin',
  img: CN_IMG_DEF,
  products: [
    {
      id: 'LXM-CN-1B',
      sku: 'LXM-CN-1B',
      familyTitle: 'Lux Coin',
      optionLabel: '1B',
      familyId: 'LXM-CN',
      price: 111111, // B * COIN, // $1.111M
      img: CN_IMG_DEF,
      video
    },
    {
      id: 'LXM-CN-100M',
      sku: 'LXM-CN-100M',
      familyTitle: 'Lux Coin',
      optionLabel: '100M',
      familyId: 'LXM-CN',
      price: 11111, // 100 * M * COIN, // $111.1K
      img: CN_IMG_DEF,
      video,
      mediaTransform: { scale: 0.75 }
    },
    {
      id: 'LXM-CN-10M',
      sku: 'LXM-CN-10M',
      familyTitle: 'Lux Coin',
      optionLabel: '10M',
      familyId: 'LXM-CN',
      price: 1111, // 10 * M * COIN, // $11.1K
      img: CN_IMG_DEF,
      video,
      mediaTransform: { scale: 0.50 }
    },
    {
      id: 'LXM-CN-1M',
      sku: 'LXM-CN-1M',
      familyTitle: 'Lux Coin',
      optionLabel: '1M',
      familyId: 'LXM-CN',
      price: 111, // M * COIN, // $1.1K
      img: CN_IMG_DEF,
      video,
      mediaTransform: { scale: 0.25 }
    },
  ] satisfies Product[]
} satisfies Family