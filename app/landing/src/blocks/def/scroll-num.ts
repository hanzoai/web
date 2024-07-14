import type { Block } from '@hanzo/ui/blocks'

interface ScrollNumBlock extends Block{
  blockType: 'scroll-num',
  aniNum: string[],
  modifier: string[],
  detail:string[]
}
export {
  type ScrollNumBlock as default
}