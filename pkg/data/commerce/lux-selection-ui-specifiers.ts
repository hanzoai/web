import type { SelectionUISpecifier } from '@hanzo/commerce/types'

export default {

  'LXM-CN': {
    singleFamily: {
      type: 'carousel',
      options: {
        familyTitle: 'long',
        showByline: false,
        showPrice: true,
      }
    }
  },  
  'LXM-CR': {
    multiFamily: {
      type: 'all-variants-carousel',
      selectorOptions: {
        showParentTitle: false,
        showItemSwatches: true
      },
      itemOptions: {
        familyTitle: 'long',
        showFamilyByline: true,
        showPrice: false,
      }
    }
  },
  'LXM-AG': {
    multiFamily: {
      type: 'all-variants-carousel',
      selectorOptions: {
        showParentTitle: true, 
        showItemSwatches: false
      },
      itemOptions: {
        familyTitle: 'long',
      }
    }
  },
  
} satisfies Record<string, SelectionUISpecifier>
