import type { Block } from '@hanzo/ui/blocks'
import type { ReactElement } from 'react'

interface DetailsBlock extends Block {
  blockType: 'details',
  pretitle: string[],
  title: string[],
  subtitle: string[],
  explain1: string[],
  explain2: string[],
  buttonName:string[],
  buttonLink:string[],
  image: ReactElement[]
}

export { type DetailsBlock as default }