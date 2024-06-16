import type { LinkDef } from '@hanzo/ui/types'

const legal: LinkDef[] = [
  {
    title: 'Terms and Conditions',
    href: 'https://docs.google.com/document/d/1mvkjr1w8Rv8ttirs1mu-_2fw_PXclOyS/preview',
    newTab: true,
  },
  {
    title: 'Privacy Policy',
    href: 'https://docs.google.com/document/d/1vZjOKaNdOoThDIaVLERWxflQLtOsuvLn/preview',
    newTab: true,
  },
] 

const title: LinkDef = 
{
  title: 'Legal',
  href: '',
  variant: 'linkFG',
}

const legalColumn: LinkDef[] =  [title, ...legal]

export {
  legal,
  legalColumn
}
