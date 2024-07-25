import React from 'react'
import Link from 'next/link'

import { Separator, buttonVariants } from '@hanzo/ui/primitives'
import { cn } from '@hanzo/ui/util'


const linkClx = buttonVariants({ 
  variant: 'linkMuted', 
  size: 'link',
  rounded: 'none', 
})

const PolicyLinks: React.FC<{
  clx?: string
}> = ({
  clx=''
}) => (
  <div className={cn('flex flex-col items-center', clx)}>
    <Separator/>
    <div className='flex gap-4 py-2 text-sm'>
      {/* TODO: add Refund policy and Privacy policy links */}
      <Link className={linkClx} href=''>refund policy</Link>
      <Link className={linkClx} href=''>privacy policy</Link>
    </div>
  </div>   
)

export default PolicyLinks
