import React from 'react'

import type { LinkDef } from '@hanzo/ui/types'
import { Form, NavItems } from '@hanzo/ui/primitives'
import { cn } from '@hanzo/ui/util'

import Copyright from './copyright'
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
}> = ({
  siteDef,
  className = '',
  noHorizPadding = false
}) => {

    const { footer, aboveCopyright } = siteDef
    const smGridCols = Math.floor(footer.length / 2)
    const smGridColsClx = `sm:grid-cols-${smGridCols} `
    const _aboveCopyright = (typeof aboveCopyright === 'undefined') ? legal : aboveCopyright

    return (
      <footer className={cn('grow flex flex-col justify-between border mt-[120px] sm:mt-[100px] md:mt-[80px] lg:mt-0 gap-6 pb-[2vh] ', className)}>
        <div className={
          (noHorizPadding ? '' : 'px-5 md:px-8 ') +
          'gap-4 gap-y-6 md:gap-x-6 lg:gap-8 ' + smGridColsClx +
          'md:w-full sm:justify-items-center md:mx-0 lg:w-full' +
          'md:flex md:flex-row md:justify-between '
        }>
          <div className=' lg:grid grid-cols-4 !pointer-events-autow-full w-full' key={0}>
            <div className=''>
              <span className='text-2xl font-normal leading-5'>
                Shortcuts
              </span>
              <div className='grid grid-cols-3 gap-3 text-muted-1 lg:items-center text-base max-w-[222px] mt-9'>
                <Link className='max-w-[83px]' href={"#"}>
                  Home
                </Link>
                <Link className='max-w-[83px]' href={"#"}>
                  Help
                </Link>
                <Link className='max-w-[83px]' href={"#"}>
                  Changelog
                </Link>
                <Link className='max-w-[83px]' href={"#"}>
                  Docs
                </Link>
                <Link className='max-w-[83px]' href={"#"}>
                  Sales
                </Link>
                <Link className='max-w-[83px]' href={"#"}>
                  Pricing
                </Link>
                <Link className='max-w-[83px]' href={"#"}>
                  Guides
                </Link>
                <Link className='max-w-[83px]' href={"#"}>
                  Blog
                </Link>
                <Link className='max-w-[83px]' href={"#"}>
                  Legal
                </Link>
              </div>
            </div>
            <div className='lg:mt-0 mt-[41.52px]'>
              <span className=' text-2xl leading-5 font-normal'>
                Connect with us
              </span>
              <div>
                <Link href={"mailto:info@hanzo.ai"} className='lg:mt-[33.8px] mt-5 underline'>
                  info@hanzo.ai
                </Link>
              </div>
            </div>
            <div className='lg:mt-0 mt-[52px] lg:-ml-[150px]'>
              <span className=' text-2xl'>
                Join our newsletter
              </span>
              <div className='flex flex-col max-w-[416px] lg:mt-[31.57px] mt-[21px]'>
                <input type='text' placeholder='Name' className=' bg-transparent text-base outline-none text-muted-1 border-b' />
                <div className='flex gap-[58px] w-full justify-between lg:mt-[31.57px] mt-[8.57px] lg:border-b-0 border-b'>
                  <input type='text' placeholder='E-mail' className='w-full bg-transparent text-base outline-none text-muted-1 lg:border-b max-w-[329px]' />
                  <Goto className='lg:bg-muted-1 bg-primary'/>
                </div>
              </div>
            </div>
            <div className='lg:mt-0 mt-12'>
              <span className=' text-2xl '>
                Follow Us
              </span>
              <div className='grid grid-cols-2 gap-3 text-[16px] lg:mt-[43.1px] mt-[30px]'>
                <Link className='social-link' href={"https://x.com/hanzoai"}>
                  X
                </Link>
                <Link className='social-link' href={"https://linkedin.com/company/hanzoai"}>
                  Linkedin
                </Link>
                <Link className='social-link' href={"https://facebook.com/hanzoinc"}>
                  Facebook
                </Link>
                <Link className='social-link' href={"https://github.com/hanzoai"}>
                  Github
                </Link>
                <Link className='social-link' href={"https://instagram.com/hanzoinc"}>
                  Instagram
                </Link>
              </div>
            </div>
          </div>
        </div>
        <div className='md:mt-[2vh] flex justify-start gap-8 lg:pl-[27px] mb-0'>
          <Nvidia />
          <Techstars />
          <Stripe />
          <Google />
          <Amazon />
          <Microsoft />
        </div>
      </footer>
    )
  }

export default Footer
// flex flex-col justify-between gap-6