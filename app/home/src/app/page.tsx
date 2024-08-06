import React from 'react'
import { Footer, Header } from '@hanzo/brand'
import siteDef from '@/site-def'
import HomeLayout from '@/layout/home'

type Props = {
  searchParams?: { [key: string]: string | string[] | undefined }
}

const Page = ({ searchParams }: Props) => {
  return (<>
    <Header siteDef={siteDef} />
    <HomeLayout />
    <Footer siteDef={siteDef} />
  </>)
}

export default Page
