import type { Block, ScreenfulBlock } from '@hanzo/ui/blocks'

import intro from './slides/intro'
import vision from './slides/vision'
import details from './slides/details/details'
import companies from './slides/companies'
import impact from './slides/impact'
import innovation from './slides/innovation'
import services from './slides/services'

const mobileTiles = [
  intro,
  vision,
  companies,
  impact,
  innovation,
] satisfies ScreenfulBlock[] as ScreenfulBlock[]

const desktopTiles = [
  intro,
  vision,
  details,
  companies,
  impact,
  innovation,
  services,
] satisfies Block[] as ScreenfulBlock[]


export {
  mobileTiles,
  desktopTiles,
}
