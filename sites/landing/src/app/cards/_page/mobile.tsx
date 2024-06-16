import { Fragment } from 'react'
import Link from 'next/link'

import { cn } from '@hanzo/ui/util'
import { ApplyTypography, Separator } from '@hanzo/ui/primitives'

import SplinePlayer from '@/components/spline-player'

import CardPreview from './mobile-card-preview'

import cards from '@/content/cards'
import sovereign from '@/content/cards/sovereign'

const title = 'Earn up to 11% of your balance annually with Lux Credit.'
const byline = 'Learn more about how you can earn rewards infinitely by using your Lux Card without ever impacting your credit score.'

const DesktopAllCards: React.FC<{
  clx: string
}> = ({
  clx,
}) => {
  return (
    <div className={cn('flex flex-col gap-4 pt-11', clx)}>
      <div className='flex flex-col gap-2 px-4'>
        <SplinePlayer src={sovereign.materials[0].animation ?? ''} className='!aspect-[12/10]'/>
        <ApplyTypography className='flex flex-col gap-2'>
          <h4>{title}</h4>
          <p className='text-sm'>{byline}</p>
          <Link href=''>What are Karma Rewards?</Link>
        </ApplyTypography>
      </div>
      <ApplyTypography className='flex flex-row justify-between items-center w-full bg-muted-4 px-4 py-2'>
        <div className='text-muted-2'>All Cards</div>
        <Link href='/compare'>Compare Cards</Link>
      </ApplyTypography>
      <div className='flex flex-col'>
        {cards.map((card, index) => (
          <Fragment key={index}>
            <CardPreview card={card} />
            {index < cards.length - 1 && <Separator className='bg-muted-4'/>}
          </Fragment>
        ))}
      </div>
    </div>
  )
}

export {
  DesktopAllCards as default
}