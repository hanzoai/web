import { ApplyTypography, Card as CardComponent } from '@hanzo/ui/primitives'
import { cn } from '@hanzo/ui/util'

const MoreWaysToEarn: React.FC<{
  rewards: {
    multiplier: number
    title: string
    description: string
  }[],
  clx?: string
}> = ({
  rewards,
  clx
}) => {
  return (
    <ApplyTypography className={cn('flex flex-col gap-7', clx)}>
      <div className='flex flex-col items-center gap-2 text-center'>
        <h3 className='!text-lg sm:!text-2xl'>More Ways to Earn</h3>
        <p className='!text-sm sm:!text-lg'>Earning KARMA while spending is easy!</p>
      </div>
      <div className='grid grid-cols-2 sm:grid-cols-none sm:grid-flow-col gap-2'>
        {rewards.map((reward, i) => (
          <CardComponent key={i} className='flex flex-col items-center p-2 md:p-3 rounded-2xl text-center'>
            <h4 className='!text-3xl'>{reward.multiplier}x</h4>
            <span className='text-xxs lg:text-xs'>KARMA POINTS</span>
            <h4 className='!text-base lg:!text-xl'>{reward.title}</h4>
            <p className='!text-xxs lg:!text-sm'>Earn Karma Rewards {reward.description}</p>
          </CardComponent>
        ))}
      </div>
    </ApplyTypography>
  )
}

export {
  MoreWaysToEarn as default
}