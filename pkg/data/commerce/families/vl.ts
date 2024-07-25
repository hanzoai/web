import type { Product, Family } from '@hanzo/commerce/types'
import { validator as video } from './videos'

const VL_IMG = '/assets/commerce/vl/product/validator-800x800.png'
const VL_IMG_DEF = {src: VL_IMG, dim: {w: 800, h: 800}}




export default {
  id: 'LXM-VL',
  title: 'Lux Validator',
  img: VL_IMG_DEF, 
  products: [
    {
      id: 'LXM-VL-GN',
      sku: 'LXM-VL-GN',
      familyTitle: 'Lux Validator',
      fullTitle: 'Genesis Validator',
      optionLabel: 'Genesis Validator',
      familyId: 'LXM-VL',
      price: 1000000, // 1M
      img: VL_IMG_DEF,
      video,
    },
    {
      id: 'LXM-VL-VL',
      sku: 'LXM-VL-VL',
      familyTitle: 'Lux Validator',
      fullTitle: 'Validator',
      optionLabel: 'Validator',
      familyId: 'LXM-VL',
      price: 100000, // 100K
      img: VL_IMG_DEF,
      video
    },
    {
      id: 'LXM-VL-MI',
      sku: 'LXM-VL-MI',
      familyTitle: 'Lux Validator',
      fullTitle: 'Mini Validator',
      optionLabel: 'Mini Validator',
      familyId: 'LXM-VL',
      price: 10000, // 10K
      img: VL_IMG_DEF,
      video
    },
    {
      id: 'LXM-VL-NA',
      sku: 'LXM-VL-NA',
      familyTitle: 'Lux Validator',
      fullTitle: 'Nano Validator',
      optionLabel: 'Nano Validator',
      familyId: 'LXM-VL',
      price: 1000, // 1K
      img: VL_IMG_DEF,
      video
    },
  ] satisfies Product[]
} satisfies Family
