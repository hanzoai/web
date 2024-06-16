import React  from 'react'

import { ApplyTypography } from '@hanzo/ui/primitives'

import type { SiteDef } from '../../site-def'
import Footer from '../footer'
import Header from '../header'
import Main from '../main'

import NotFoundMDX from './not-found-content.mdx'

const NotFound: React.FC<{
  header?: boolean
  siteDef: SiteDef
}>  = ({
  header=false,
  siteDef
}) => (<>
  {header && <Header siteDef={siteDef}/>}
  <Main className='h-[100svh] sm:h-[700px] px-8 sm:px-10 ' headerSpace={header}>
    <ApplyTypography className='mt-[200px] flex flex-col md:gap-8 '>
      <NotFoundMDX />
    </ApplyTypography>
  </Main>
  <Footer siteDef={siteDef}/>
</>)

export default NotFound
