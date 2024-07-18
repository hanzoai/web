import siteDef from '@/site-def'
import { Footer, Header } from '@hanzo/brand'
import React from 'react'


type Props = {
  searchParams?: { [key: string]: string | string[] | undefined }
}

const page = ({ searchParams }: Props) => {
  const agent = searchParams?.agent as string
  return (
    <>
      <Header siteDef={siteDef} />
      <Footer siteDef={siteDef} />
    </>
  )
}

export default page
