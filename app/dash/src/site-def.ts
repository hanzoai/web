import { footer, mainNav, type SiteDef  } from '@hanzo/brand/site-def'
import { commerceConfig as commerce } from '@hanzo/data/commerce'

export default {
  currentAs: 'https://dash.hanzo.ai',
  nav: {
    common: mainNav,
  },
  footer: footer.standard, 
  commerce,
} as SiteDef

