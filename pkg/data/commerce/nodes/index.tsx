import React from 'react'

import * as Icons from 'lucide-react'

import type { CategoryNode } from '@hanzo/commerce/types'

import SVG_CastBar from './img/bar.svg'
import SVG_Coin from './img/coin2.svg'
import SVG_MintedBar from './img/minted-bar.svg'

import credit from './credit'

const BULLION_FORM = [
  {
    skuToken: 'B',
    label: 'Minted Bars',
    img: <SVG_CastBar height={18} />,
  },
  {
    skuToken: 'C',
    label: 'Minted Coins',
    img: <SVG_Coin width={18} />,
  },
  {
    skuToken: 'CB',
    label: 'Cast Bars',
    img: <SVG_CastBar width={22} />,
  },
] satisfies CategoryNode[]


const level1 = [
  {
    skuToken: 'AG',
    label: 'Lux Silver',
    outermost: true,
    img: 'https://cdn.lux.network/commerce/silver/product/silver-bar-pt-100x125.png',
    imgAR: 1/1.25,
    subNodes: [
      //...BULLION_FORM
      {
        skuToken: 'B',
        label: 'Minted Bars',
        img: <SVG_MintedBar height={18} />,
      }
    ]
  },
  /*
  {
    skuToken: 'AU',
    label: 'Lux Gold',
    outermost: true,
    img: 'https://cdn.lux.network/commerce/gold/product/gold-bar-pt-100x125.png',
    imgAR: 1/1.25,
    subNodes: [...BULLION_FORM]
  },
  */
  {
    skuToken: 'VL',
    label: 'Validator',
    img: <Icons.Gem className='text-foreground h-4 w-4'/> //'https://cdn.lux.network/commerce/vl/product/validator-100x100.png',
  },
  {
    skuToken: 'CN',
    label: 'Coin',
    img: 'https://cdn.lux.network/commerce/cn/product/lux-coin-446x446.png',
  },
  {
    skuToken: 'PS',
    label: 'Key',
    img: 'https://cdn.lux.network/commerce/ps/product/pass-icon-539x686.png',
    imgAR: 539 / 686
  },
  credit
] satisfies CategoryNode[]

export default {
  skuToken: 'LXM',
  label: '',
  subNodes: level1
} satisfies CategoryNode





