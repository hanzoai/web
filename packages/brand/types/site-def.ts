import React from 'react'

import type { LinkDef } from '@hanzo/ui/types'
import type { CommerceConfig }  from '@hanzo/commerce/types'

import type ChatbotConfig from './chatbot-config'

interface SiteDef {

    /** url of this site.  All nav links in the system will show it in 'current' state */
  currentAs?: string

  nav: {
      /** common elements (will auto-select currentAs if it's provide) */
      /** optional feature element. right-most after 'elements' (any min-w is ignored) */
    common: LinkDef[]       
    featured?: LinkDef[]
  }

    /** 
     * Array of columns, each of which itself is an array of links 
     * (or "title defs" where href='' and variant='linkFG')  
     * Common use case: To render a site-specific first column: 
     * {
     *    footer[myColumn, ...commonColumnsFromUi]
     * }
     * see: @hanzo/ui/siteDef/footer (default export)
     * or @hanzo/ui/siteDef/footer/common
     */
  footer: LinkDef[][]  

    /** 
     * optional override of default 'above copyright' horizantal links 
      default (undefined / absent): links in side-def/footer/legal are rendered 
      [] renders nothing above the copyright 
    */
  aboveCopyright?: LinkDef[] 

  commerce?: CommerceConfig
  chatbot?: ChatbotConfig
}

export { type SiteDef as default }
