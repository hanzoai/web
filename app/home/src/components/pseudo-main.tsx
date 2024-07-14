import React, { type PropsWithChildren } from 'react'

import { cn } from '@hanzo/ui/util'

const c = 'max-w-screen-2xl 2xl:w-[1500px] lg:mx-auto ' + 
  'flex flex-col justify-start items-center ' +
  'p-4 md:px-6 lg:px-8 '

const PseudoMain: React.FC<PropsWithChildren & { 
  id?: string
  className?: string 
}> = ({
  children,
  className='',
  id
}) => (
  <div id={id ?? ''} className={cn(c, className)}>
    {children}
  </div>
)

export default PseudoMain
