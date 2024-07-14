import React from 'react'

import { ApplyTypography } from '@hanzo/ui/primitives'
import { cn } from '@hanzo/ui/util'

const RowHeading: React.FC<{
  title: string,
  description?: string
  clx?: string
}> = ({
  title,
  description,
  clx
}) => {
  return (
    <ApplyTypography className={cn('flex flex-col items-center lg:items-start !gap-0 mt-2 lg:gap-7', clx)}>
      <h5 className='font-heading !my-0 text-center sm:text-left md:text-lg lg:text-xl xl:text-2xl'>{title}</h5>
      {description && <p className='italic text-sm mb-2 md:max-w-pr-80  lg:w-full'>{description}</p>}
    </ApplyTypography>
  )
}

export default RowHeading