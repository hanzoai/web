import { type CommerceConfig } from '@hanzo/commerce/types'

import options from './lux-commerce-service-options'
import uiSpecifiers from './lux-selection-ui-specifiers'

import rootNode from './nodes'
import families from './families'

export const commerceConfig = {
  rootNode, 
  families,
  options,
  uiSpecifiers 
} satisfies CommerceConfig

export { bullionPrice1oz } from './families/bullion'

