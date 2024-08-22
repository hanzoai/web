import { type Block, type ScreenfulBlock } from '@hanzo/ui/blocks'

import case_study_intro from './slides/case-study/intro'
import case_study_description from './slides/case-study/description'
import case_studies from './slides/case-study/case-studies'

// individual case study page slides

import individual_case_study_intro from './slides/case-study/individual/intro'
import individual_case_study_description from './slides/case-study/individual/description'
import individual_case_study_full_description from './slides/case-study/individual/full-description'
import individual_case_study_next from './slides/case-study/individual/next'

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
  case_study_tiles,
  case_studies,
  individual_case_study_tiles
}
