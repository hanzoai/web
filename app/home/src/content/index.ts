import { ScreenfulBlockComponent, type Block, type ScreenfulBlock } from '@hanzo/ui/blocks'

// home page slides

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

// case study page slides

import case_study_intro from './slides/case-study/intro'
import case_study_description from './slides/case-study/description'
import case_studies from './slides/case-study/case-studies'

// individual case study page slides

import individual_case_study_intro from './slides/case-study/individual/intro'
import individual_case_study_description from './slides/case-study/individual/description'
import individual_case_study_full_description from './slides/case-study/individual/full-description'
import individual_case_study_next from './slides/case-study/individual/next'

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

const case_study_tiles = [
  case_study_intro,
  case_study_description,
] satisfies Block[] as ScreenfulBlock[]

const individual_case_study_tiles = [
  individual_case_study_intro,
  individual_case_study_description,
  individual_case_study_full_description,
  individual_case_study_next
] satisfies Block[] as ScreenfulBlock[]

export {
  mobileTiles,
  desktopTiles,
  case_study_tiles,
  case_studies,
  individual_case_study_tiles
}
