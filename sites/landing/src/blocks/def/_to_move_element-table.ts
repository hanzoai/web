import type { Block, ElementBlock } from '@hanzo/ui/blocks'

interface ElementTableBlock extends Block {
  blockType: 'element-table'
  elements: ElementBlock[][]
}

export {
  type ElementTableBlock as default
}
