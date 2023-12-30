'use client'

import Link from 'next/link'
import { EnhHeadingBlockComponent, type EnhHeadingBlock } from '@hanzo/ui/blocks'
import { cn } from '@hanzo/ui/util'
import type { Milestone } from '@/types'

const MilestoneComponent: React.FC<{
  milestone: Milestone,
  className: string
}> = ({
  milestone,
  className
}) => {
  const {icon, preheading, heading, byline, href} = milestone

  return (
    <div className={cn('flex flex-col items-center sm:flex-row gap-2 sm:gap-12 max-w-[50rem]', className)}>
      <div className='my-auto w-fit'>
        {icon}
      </div>
      <div className='flex flex-col gap-2 sm:gap-4'>
        <EnhHeadingBlockComponent block={{blockType: 'enh-heading',
            preheading: {text: preheading, level: 0, mb: 0},
            heading: {text: heading, level: 4},
            byline: {text: byline, level: 0}
          } as EnhHeadingBlock} className='typography-p:text-xs typography-p:sm:text-base'/>
        {href && <Link href={href} className='w-fit'>Learn more</Link>}
      </div>
    </div>
  )
}

const Roadmap: React.FC<{
  title: string
  description: string
  milestones: Milestone[]
}> = ({
  title,
  description,
  milestones
}) => {
  return (  
    <div
      className='h-full flex flex-col gap-20 overflow-y-auto pb-20 px-3 w-full items-center'
      style={{scrollbarWidth: 'none'}}
    >
      <div className='flex flex-col gap-4 sm:gap-8 mx-auto max-w-[50rem] snap-start'>
        <h3 className='!text-2xl !text-center'>{title}</h3>
        <p>{description}</p>
      </div>

      {milestones.map((milestone: Milestone, index) => (
        <MilestoneComponent milestone={milestone} key={index} className='snap-start'/>
      ))}
    </div>
  )
}

export default Roadmap