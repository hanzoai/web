import type { Block } from '@hanzo/ui/blocks'

interface ServiceBlock extends Block {
  blockType:'service'
  title:string[]
  details:string[][]
}
export {type ServiceBlock as default}