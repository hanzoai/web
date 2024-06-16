import type { Block } from '@hanzo/ui/blocks'
  
import type { LinkDef } from '@hanzo/ui/types'
 
interface ItemCTAsBlock extends Block {
  blockType: 'item-ctas'
  otherLink?: LinkDef
  buyLabel?: string
  skuPath?: string
}

export {
  type ItemCTAsBlock as default
}
