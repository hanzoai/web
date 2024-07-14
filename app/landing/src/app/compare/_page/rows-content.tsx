import React, { type PropsWithChildren } from 'react'

import { ApplyTypography } from '@hanzo/ui/primitives'
import { cn } from '@hanzo/ui/util'
import { formatCurrencyValue } from '@hanzo/commerce'

import type { Card } from '@luxfi/data/commerce/types'

import { NUM_CARDS_DESKTOP, NUM_CARDS_MOBILE } from './CONST'

const MdxRowContent: React.FC<{
  key: number | string
  hiddenOnMobile?: boolean
  clx?: string
} & PropsWithChildren> = ({
  key,
  hiddenOnMobile,
  clx,
  children
}) => {
  return (
    <ApplyTypography
      key={key}
      className={cn(
        hiddenOnMobile ? 'hidden lg:flex' : 'flex',
        'flex-col gap-2 lg:gap-4 lg:col-span-3 typography-p:text-sm md:typography-p:text-base',
        clx
      )}
    >
      {children}
    </ApplyTypography>
  )
}

const DataRowContent: React.FC<{
  key: number
  hiddenOnMobile?: boolean
  clx?: string
} & PropsWithChildren> = ({
  key,
  hiddenOnMobile,
  clx,
  children
}) => {
  return (
    <ApplyTypography
      key={key}
      className={cn(
        hiddenOnMobile ? 'hidden lg:flex' : 'flex',
        'items-center justify-center lg:col-span-3',
        clx
      )}
    >
      {children}
    </ApplyTypography>
  )
}

const rowsContent = (selectedCards: Card[]) => {
  return [
    {
      title: 'Travel Benefits',
      description: 'Sustainable, mindful experiences to elevate the body, mind, and soul.',
      content: <>
        {[...Array(NUM_CARDS_DESKTOP)].map((_, i) => (
          <MdxRowContent key={i} hiddenOnMobile={i > NUM_CARDS_MOBILE - 1}>
            {selectedCards[i]?.travelBenefits}
          </MdxRowContent>
        ))}
      </>
    },
    {
      title: 'What you earn?',
      description: 'Rewards are based on a percentage of your average available credit.',
      content: <>
        {[...Array(NUM_CARDS_DESKTOP)].map((_, i) => (
          <MdxRowContent key={i} hiddenOnMobile={i > NUM_CARDS_MOBILE - 1} clx='justify-center'>
            {selectedCards[i]?.rewards}
          </MdxRowContent>
        ))}
      </>
    },
    {
      title: 'Karma Rewards',
      description: 'Karma Rewards, is our point reward system that can be used to pay for almost anything. You can also leverage it and earn even more by staking the Karma you have accrued in the Lux ecosystem. Plus you can even sell it to pay off your balance. ',
      content: <>
        {[...Array(NUM_CARDS_DESKTOP)].map((_, i) => (
          <DataRowContent key={i} hiddenOnMobile={i > NUM_CARDS_MOBILE - 1} clx='flex-col items-start self-start'>
            {selectedCards[i]?.karmaRewards && (
              <>
                <p key={`p-${i}`} className='font-bold'>Earn Karma while you spend</p>
                <div key={`div-${i}`} className='flex flex-col gap-2'>
                  {selectedCards[i]?.karmaRewards.map(({multiplier, description}, i) => (
                    <p key={i}><span className='font-bold'>{multiplier}X points</span> {description}</p>
                  ))}
                </div>
              </>
            )}
          </DataRowContent>
        ))}
      </>
    },
    {
      title: 'Exclusive Lux Benefits',
      content: <>
        {[...Array(NUM_CARDS_DESKTOP)].map((_, i) => (
          <MdxRowContent key={i} hiddenOnMobile={i > NUM_CARDS_MOBILE - 1}>
            {selectedCards[i]?.lifestyleBenefits}
          </MdxRowContent>
        ))}
      </>
    },
    {
      title: 'Maximum Account Holders',
      description: 'Reward Based on average Deposit.',
      content: <>
        {[...Array(NUM_CARDS_DESKTOP)].map((_, i) => (
          <DataRowContent key={i} hiddenOnMobile={i > NUM_CARDS_MOBILE - 1}>
            <h4>{selectedCards[i]?.maxAccountHolders}</h4>
          </DataRowContent>
        ))}
      </>
    },
    {
      title: 'Annual Reward',
      description: 'Reward Based on average Deposit.',
      content: <>
        {[...Array(NUM_CARDS_DESKTOP)].map((_, i) => (
          <DataRowContent key={i} hiddenOnMobile={i > NUM_CARDS_MOBILE - 1}>
            {selectedCards[i] && <h4>{selectedCards[i].rewardPct}%</h4>}
          </DataRowContent>
        ))}
      </>
    },
    {
      title: 'Lost Card Fee',
      description: 'If you lose your card we can replace it and get it to you within 3 days, business days with expedited worldwide shipping.',
      content: <>
        {[...Array(NUM_CARDS_DESKTOP)].map((_, i) => (
          <DataRowContent key={i} hiddenOnMobile={i > NUM_CARDS_MOBILE - 1}>
            {selectedCards[i] && <h4>{formatCurrencyValue(selectedCards[i].replacementFee)}</h4>}
          </DataRowContent>
        ))}
      </>
    },
    {
      title: 'Fx Rate',
      description: 'Rate of exchange when traveling or paying in foreign currency.',
      content: <>
        {[...Array(NUM_CARDS_DESKTOP)].map((_, i) => (
          <DataRowContent key={i} hiddenOnMobile={i > NUM_CARDS_MOBILE - 1}>
            {selectedCards[i] && <h4>{selectedCards[i].fxRatePct}%</h4>}
          </DataRowContent>
        ))}
      </>
    }
  ]
}

export {
  rowsContent as default
}