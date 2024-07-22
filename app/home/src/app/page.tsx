import HomeLayout from '@/layout/home'
import siteDef from '@/site-def'
import { Footer, Header } from '@hanzo/brand'
import React from 'react'


type Props = {
  searchParams?: { [key: string]: string | string[] | undefined }
}

const page = ({ searchParams }: Props) => {
  return (
    <>
      <Header siteDef={siteDef} />
      <HomeLayout />
      <Footer siteDef={siteDef} />
    </>
  )
}

export default page
