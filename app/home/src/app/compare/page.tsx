import React  from 'react'

import { Main } from '@hanzo/brand'

import '@/blocks/registerComponents'

import CompareCards from './_page'

type Props = {
  searchParams?: { [key: string]: string }
}

const Page = ({ searchParams }: Props) => {
  
  const predefinedCards = searchParams?.cards
  const mobile = searchParams?.agent === 'phone'

  return (
    <Main>
      <CompareCards predefinedCards={predefinedCards} mobile={mobile}/> 
    </Main>
  )
}

export default Page
