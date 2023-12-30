import type { LinkDef } from '@hanzo/ui/types'

import ecosystem from './ecosystem'
import network from './network'
import company from './company'
import community from './community'
import { legal, legalColumn } from './legal'


const standard = [
  ecosystem,
  network,
  company,
  community,
] satisfies LinkDef[][] 

export {
  ecosystem,
  network,
  company,
  community,
  legal, 
  legalColumn,
  standard 
}

