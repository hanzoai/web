'use client'

import Link from 'next/link'
import { useRouter } from 'next/navigation'

import { setCookie } from 'cookies-next'

import { cn } from '@hanzo/ui/util'
import { Button, Carousel, CarouselContent, CarouselItem } from '@hanzo/ui/primitives'
import { LoginPanel as Login } from '@hanzo/auth/components'

import Logo from '../logo'
import { EmblaAutoplay } from '..'
import { legal } from '../../site-def/footer'

const LoginPanel: React.FC<{
  close: () => void
  getStartedUrl?: string
  redirectUrl?: string
  className?: string
  reviews: { text: string, author: string, href: string }[]
  setIsLogin?: React.Dispatch<React.SetStateAction<boolean>>
}> = ({
  close,
  getStartedUrl='/',
  redirectUrl,
  className='',
  reviews,
  setIsLogin
}) => {
  const router = useRouter()

  const termsOfServiceUrl = legal.find(({title}) => title === 'Terms and Conditions')?.href || ''
  const privacyPolicyUrl = legal.find(({title}) => title === 'Privacy Policy')?.href || ''

    // TODO :aa shouldn't this happen in @hanzo/auth: components/LoginPanel ??
    // Otherwise, the functionality is split across modules! (and client/fw!) 
    // (This was never my intent w the onLoginChanged callback.)
  const onLogin = (token: string) => {
    setCookie('auth-token', token, {
      domain: '.hanzo.ai',
      path: '/',
      sameSite: 'none',
      secure: true,
      httpOnly: false,
      expires: new Date(Date.now() + 1000 * 60 * 60 * 24 * 30), // 30 days
    })

    redirectUrl && router.push(redirectUrl)
  }

  return (
    <div className={cn('grid grid-cols-1 md:grid-cols-2', className)}>
      <div className='hidden md:flex w-full h-full bg-level-1 flex-row items-end justify-end overflow-y-auto min-h-screen'>
        <div className='h-full w-full max-w-[750px] px-8 pt-0'>
          <div className='h-full w-full max-w-[550px] mx-auto flex flex-col justify-between min-h-screen py-10'>
            <Button
              variant='ghost'
              onClick={close}
              className='w-fit !min-w-0 p-2'
            >
              <Logo size='md' spanClassName='!cursor-pointer' layout='text-only'/>
            </Button>
            <Carousel
              options={{ align: 'center', loop: true }}
              className='w-full'
              plugins={[EmblaAutoplay({ delay: 5000, stopOnInteraction: true })]}
            >
              <CarouselContent>
                {reviews.map(({text, author, href}, index) => (
                  <CarouselItem key={index}>
                    <Link href={href} className='flex flex-col gap-3 cursor-pointer'>
                      <p>“{text}“</p>
                      <p className='text-sm'>{author}</p>
                    </Link>
                  </CarouselItem>
                ))}
              </CarouselContent>
            </Carousel>
          </div>
        </div>
      </div>
      <div className='w-full h-full bg-background flex flex-row items-center'>
        <div className='w-full max-w-[750px] relative flex flex-col items-center px-8 pt-0 text-center'>
          <div className='relative h-full w-full max-w-[400px] mx-auto flex flex-col gap-4 items-center py-10'>
            <Button
              variant='ghost'
              onClick={close}
              className='block md:hidden absolute rounded-full p-2 left-0 h-auto hover:bg-background'
            >
              {/* <LuxLogo className='w-5 h-5'/> */}
            </Button>
            <Login
              getStartedUrl={getStartedUrl}
              redirectUrl={redirectUrl}
              className='w-full max-w-sm'
              termsOfServiceUrl={termsOfServiceUrl}
              privacyPolicyUrl={privacyPolicyUrl}
              onLoginChanged={onLogin}
              setIsLogin={setIsLogin}
            />
          </div>
        </div>
      </div>
    </div>
  )
}

export default LoginPanel
