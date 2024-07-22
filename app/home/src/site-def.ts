import { footer, mainNav, type SiteDef  } from '@hanzo/brand/site-def'

import { commerceConfig as commerce }  from '@luxfi/data/commerce'

export default {
  currentAs: 'https://lux.credit',
  nav: {
    common: mainNav,
  },
  footer: footer.standard, 
  commerce,
} satisfies SiteDef
