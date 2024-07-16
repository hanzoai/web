'use client'

import React  from 'react'

import { useRouter } from 'next/navigation'
import { ChatWidget, LoginPanel, SignupPanel } from '@hanzo/brand'
import { useState } from 'react'


/* for example, as slug
type Props = {
  params: { slug: string }
  searchParams?: { [key: string]: string | string[] | undefined }
}
*/ 
import siteDef from '../site-def'

const reviews = [
  {
    text: 'The Hanzo DX platform is absolutely amazing! This AI software has completely changed my perspective on e-commerce, making everything super easy. From building my company to handling daily operations, Hanzo DX has been a huge help every step of the way.',
    author: 'jxh',
    href: 'https://www.trustpilot.com/users/6695fa10776b8640cac16cb5'
  },
  {
    text: 'Hanzo.ai delivers just as expected. Z and the team are excellent.',
    author: 'Sanoj Allen',
    href: 'https://www.trustpilot.com/users/6695f502059eb4be1ef73803'
  },
  {
    text: 'Hanzo DX has top-notch customer support. Whenever I encounter technical issues or need advice, their support team is always quick to respond and very professional. They not only fix my problems but also offer lots of helpful suggestions to improve my experience with the platform.',
    author: 'jxh',
    href: 'https://www.trustpilot.com/users/6695fa10776b8640cac16cb5'
  },
  {
    text: 'A robust solution for e-commerce and online business. Data at scale. Incredibly useful and loved working with the team!',
    author: 'Michael Filtier',
    href: 'https://www.trustpilot.com/users/6695f996033f73f063111f05'
  },
  {
    text: 'Hanzo DX team and their services are excellent. They support me not only technically but also provide valuable business development advice. These services have helped me streamline my business processes, increase sales, and grow my company quickly.',
    author: 'jxh',
    href: 'https://www.trustpilot.com/users/6695fa10776b8640cac16cb5'
  },
]

type Props = {
  searchParams?: { [key: string]: string | string[] | undefined }
}

const UniversalPage = ({ searchParams }: Props) => {
  const router = useRouter()

  const [isLogin, setIsLogin] = useState(true)

  const handleLoginDone = () => {
    router.back()
  }
  
  return (<>
    <div className={isLogin ? '' : 'hidden'}>
      <LoginPanel
        close={handleLoginDone}
        getStartedUrl='hanzo.ai'
        redirectUrl={searchParams?.redirectUrl as string ?? undefined}
        reviews={reviews}
        setIsLogin={setIsLogin}
      />
    </div>
    <div className={isLogin ? 'hidden' : ''}>
      <SignupPanel
        close={handleLoginDone}
        getStartedUrl='hanzo.ai'
        redirectUrl={searchParams?.redirectUrl as string ?? undefined}
        reviews={reviews}
        setIsLogin={setIsLogin}
      />
    </div>
    <ChatWidget
      title='LUX'
      subtitle='AI'
      chatbotUrl='https://lux.chat/iframe'
    />
</>)}

export default UniversalPage
