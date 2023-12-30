import type { Product } from '@hanzo/commerce/types'
import { formatCurrencyValue } from '@hanzo/commerce'

import type { CardFamily } from '../../../types'

import MDX_Content from './detail.mdx'
import m from './media'

const fees = {
  initial: 999,
  annual: 99
}
const byline = `${formatCurrencyValue(fees.initial)} initiation - ${formatCurrencyValue(fees.annual)} yearly`

export default {
  type: 'black',
  id: 'LXM-CR-B',
  material: 'Annodized Black Titanium',
  parentTitle: 'Lux Credit',
  title: 'Lux Black Card',
  titleShort: 'Black',
  ...m.spreadableImg('LXM-CR-B'),
  run: -1, // unlimited
  fees,
  byline,
  detail: <MDX_Content />,
  products: [
    {
      id: 'LXM-CR-B-ABT',
      sku: 'LXM-CR-B-ABT',
      familyTitle: 'Black',
      optionLabel: 'Annodized Black Titanium',
      optionLabelShort: 'Titanium',
      familyId: 'LXM-CR-B',
      price: fees.initial,
      ...m.spreadableOptionImg('LXM-CR-B-ABT'),
      ...m.mediaStack('LXM-CR-B-ABT'),
    } satisfies Product,
        {
      id: 'LXM-CR-B-GM',
      sku: 'LXM-CR-B-GM',
      familyTitle: 'Black',
      optionLabel: 'Black Gunmetal',
      optionLabelShort: 'Gunmetal',
      familyId: 'LXM-CR-B',
      price: fees.initial,
      ...m.spreadableOptionImg('LXM-CR-B-GM'),
      ...m.mediaStack('LXM-CR-B-GM'),
    } satisfies Product

  ]
} satisfies CardFamily 
