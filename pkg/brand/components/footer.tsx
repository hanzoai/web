'use client'

import React, { useState, type ChangeEvent } from 'react'

import type { LinkDef } from '@hanzo/ui/types'
import { Form, NavItems } from '@hanzo/ui/primitives'
import { cn } from '@hanzo/ui/util'

import type { SiteDef } from '../site-def'
import { legal } from '../site-def/footer/legal'
import Logo from './logo'
import Link from 'next/link'
import Goto from './icons/Goto'
import Nvidia from './icons/Nvidia'
import Techstars from './icons/Techstars'
import Stripe from './icons/Stripe'
import Amazon from './icons/Amazon'
import Microsoft from './icons/Microsoft'
import Google from './icons/Google'

const Footer: React.FC<{
  siteDef: SiteDef,
  className?: string,
  noHorizPadding?: boolean
  gmail?: string,
  password?: string,
}> = ({
  siteDef,
  className = '',
  noHorizPadding = false,
  gmail = 'gtanjnarine@gmail.com',
  password = 'delta913'
}) => {

    const { footer, aboveCopyright } = siteDef
    const smGridCols = Math.floor(footer.length / 2)
    const smGridColsClx = `sm:grid-cols-${smGridCols} `
    const _aboveCopyright = (typeof aboveCopyright === 'undefined') ? legal : aboveCopyright
    const [email, setEmail] = useState('')
    const [username, setUsername] = useState('')

    function isValidEmail(email: string) {
      // Email validation regex
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      return emailRegex.test(email);
    }

    const handleSubmit = async () => {
      let valid = true
      if (!isValidEmail(email)) {
        setEmail('Invalid Email Address');
        valid = false
      }

      if (username.length < 1 || username == 'Name') {
        setUsername('Invalid Username');
        valid = false
      }

      if (valid) {
        try {
          const response = await fetch('/api/join-newsletter', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({ email, username })
          })

          if (response.ok) {
            console.log('Email sent successfully')
          } else {
            console.error('Error sending email')
          }
        } catch (error) {
          console.error(error);
        }
      }
    }

    const handleName = (e: ChangeEvent<HTMLInputElement>) => {
      setUsername(e.target.value)
    }

    const handleEmail = (e: ChangeEvent<HTMLInputElement>) => {
      setEmail(e.target.value)
    }

    return (
      <footer className={cn('grow flex flex-col justify-between gap-6 pb-[2vh]', className)}>
        <div className={
          (noHorizPadding ? '' : 'px-4 md:px-8 ') +
          'gap-4 gap-y-6 md:gap-x-6 lg:gap-8 ' + smGridColsClx +
          'md:w-full sm:justify-items-center md:mx-0 lg:w-full' +
          'md:flex md:flex-row md:justify-between '
        }>
          <div className='flex md:flex-row flex-col !pointer-events-autow-full w-full gap-8' key={0}>
            <div className='md:flex-[19%] flex flex-col 2xl:gap-10 gap-4'>
              <div className='flex flex-row 2xl:gap-5 xl:gap-4 gap-3'>
                <Logo size='md' href='https://hanzo.ai/' className='flex' key='two' layout='logo-only'/>
              </div>
            </div>
            <div className='md:flex-[27%] flex flex-col 2xl:gap-10 gap-4'>
              <span className='2xl:text-2xl md:text-xl text-2xl font-normal leading-5'>
                Shortcuts
              </span>
              <div className='flex flex-row gap-6 text-muted-1 lg:items-center text-base'>
                <div className='flex flex-col gap-3'>
                  <Link className='hover:text-primary transition duration-500' href={"#"}>
                    Home
                  </Link>
                  <Link className='hover:text-primary transition duration-500' href={"#"}>
                    Docs
                  </Link>
                  <Link className='hover:text-primary transition duration-500' href={"#"}>
                    Guides
                  </Link>
                </div>
                <div className='flex flex-col gap-3'>
                  <Link className='hover:text-primary transition duration-500' href={"#"}>
                    Help
                  </Link>
                  <Link className='hover:text-primary transition duration-500' href={"#"}>
                    Sales
                  </Link>
                  <Link className='hover:text-primary transition duration-500' href={"#"}>
                    Blog
                  </Link>
                </div>
                <div className='flex flex-col gap-3'>
                  <Link className='hover:text-primary transition duration-500' href={"#"}>
                    Changelog
                  </Link>
                  <Link className='hover:text-primary transition duration-500' href={"#"}>
                    Pricing
                  </Link>
                  <Link className='hover:text-primary transition duration-500' href={"#"}>
                    Legal
                  </Link>
                </div>
              </div>
            </div>
            <div className='md:flex-[27%] flex flex-col 2xl:gap-10 md:gap-4 gap-8' >
              <span className='2xl:text-2xl md:text-xl text-2xl font-normal leading-5'>
                Join our newsletter
              </span>
              <div className='flex flex-col gap-3'>
                <input type='text' value={username} placeholder='Name' onChange={(e) => handleName(e)} className=' bg-transparent text-base outline-none text-muted-1 border-b' />
                <div className='flex flex-row gap-4 w-full md:border-b-0 border-b'>
                  <input type='text' value={email} placeholder='E-mail' onChange={(e) => handleEmail(e)} className='w-full bg-transparent text-base outline-none text-muted-1 md:border-b' />
                  <button className='bg-transparent' onClick={handleSubmit}>
                    <Goto />
                  </button>
                </div>
              </div>
              <div className='md:flex-1 flex flex-col 2xl:gap-10 gap-3'>
                <span className='2xl:text-2xl md:text-xl text-2xl leading-5 font-normal'>
                  Connect with us
                </span>
                <div>
                  <Link href={"mailto:info@hanzo.ai"} className='underline text-base font-light text-muted-1 hover:text-primary transition duration-500'>
                    info@hanzo.ai
                  </Link>
                </div>
              </div>
            </div>
            <div className='md:flex-[27%] flex md:justify-center'>
              <div className='flex flex-col 2xl:gap-10 gap-4'>
                <span className='2xl:text-2xl md:text-xl text-2xl font-normal leading-5'>
                  Follow Us
                </span>
                <div className='flex flex-row gap-6 text-[16px] text-muted-1'>
                  <div className='flex flex-col gap-3'>
                    <Link className='social-link hover:text-primary transition duration-500' href={"https://x.com/hanzoai"}>
                      X
                    </Link>
                    <Link className='social-link hover:text-primary transition duration-500' href={"https://facebook.com/hanzoinc"}>
                      Facebook
                    </Link>
                    <Link className='social-link hover:text-primary transition duration-500' href={"https://instagram.com/hanzoinc"}>
                      Instagram
                    </Link>
                  </div>
                  <div className='flex flex-col gap-3'>
                    <Link className='social-link hover:text-primary transition duration-500' href={"https://linkedin.com/company/hanzoai"}>
                      Linkedin
                    </Link>
                    <Link className='social-link hover:text-primary transition duration-500' href={"https://github.com/hanzoai"}>
                      Github
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className='mt-8 flex flex-row md:justify-start justify-between md:gap-8'>
            <Nvidia />
            <Techstars />
            <Stripe />
            <Google />
            <Amazon />
            <Microsoft />
          </div>
        </div>
      </footer>
    )
  }

export default Footer
// flex flex-col justify-between gap-6