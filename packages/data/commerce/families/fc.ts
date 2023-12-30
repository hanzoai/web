import type { Product, Family } from '@hanzo/commerce/types'
import { coin as coinVideo } from './videos'
import { validator as valVideo } from './videos'
import { key as keyVideo } from './videos'
import type { ImageDef } from '@hanzo/ui/types'

const CN_IMG = '/assets/commerce/cn/product/lux-coin-800x800.png'
const CN_IMG_DEF = {
  src: CN_IMG, 
  dim: { w: 800, h: 800},
  rounded: 'full'
} satisfies ImageDef

const COIN = 0.00011

const K = 1000
const M = 1000 * K
const B = 1000 * M

export default {
  id: 'LXM-FC',
  title: 'Fux Coin',
  img: CN_IMG_DEF, 
  products: [
    {
      id: 'LXM-FC-10B',
      sku: 'LXM-FC-10B',
      familyTitle: 'Fuxx Coin',
      optionLabel: '10B',
      byline: "really the Coin, Loin",
      familyId: 'LXM-FC',
      price: 10 * B * COIN, // $11M
      img: CN_IMG_DEF,
      video: coinVideo
    },
    {
      id: 'LXM-FC-1B',
      sku: 'LXM-FC-1B',
      familyTitle: 'Fuxx Coin',
      optionLabel: '1B',
      byline: "really the Validator",
      familyId: 'LXM-FC',
      price: B * COIN, // $1.1M
      img: CN_IMG_DEF,
      video: valVideo
    },
    {
      id: 'LXM-FC-100M',
      sku: 'LXM-FC-100M',
      familyTitle: 'Fuxx Coin',
      optionLabel: '100M',
      byline: "really the Pass, Ass",
      familyId: 'LXM-FC',
      price: 100 * M * COIN, // $110K
      img: CN_IMG_DEF,
      video: keyVideo,
      animation: 'https://prod.spline.design/Itggaf1iI7481mcU/scene.splinecode'
    },
  ] satisfies Product[]
} satisfies Family