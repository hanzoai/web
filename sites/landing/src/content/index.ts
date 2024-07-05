import type { Block, ScreenfulBlock } from '@hanzo/ui/blocks'

import intro from './slides/intro'
import vision from './slides/vision'
import details from './slides/details/details'
import companies from './slides/companies'
import impact from './slides/impact'
import innovation from './slides/innovation'
import services from './slides/services'
import intro_mobile from './slides/intro_mobile'
import work_with_us from './slides/work-with-us'
import studies_portion from './slides/studies-portion'


const mobileTiles = [
  intro_mobile,
  details,
  companies,
  impact,
  studies_portion,
  innovation,
  services,
  work_with_us
] satisfies Block[] as ScreenfulBlock[]

const desktopTiles = [
  intro,
  vision,
  details,
  companies,
  impact,
  studies_portion,
  innovation,
  services,
] satisfies Block[] as ScreenfulBlock[]


export {
  mobileTiles,
  desktopTiles,
}
