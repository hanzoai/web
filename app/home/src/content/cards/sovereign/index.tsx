import type { Card } from '@luxfi/data/commerce/types'

import TravelBenefits from './travel-benefits.mdx'
import LifestyleBenefits from './lifestyle-benefits.mdx'
import Rewards from './rewards.mdx'
import Preview from './preview.mdx'
import { row1, row2 } from './quickview'
import benefits from '../benefits'

const card: Card = {
  category: 'sovereign',
  title: 'Sovereign Card',
  rarity: '1/1,000',
  materials: [{
    title: 'Reflective Titanium',
    titleAlt: 'Mirrored Card',
    sku: 'LXM-CR-S-RT',
    materialImg: {
      src: '/assets/commerce/cr/product/option/sovereign-card-reflective-titanium-100x99.png',
      dim: {w: 100, h: 99 },
      alt: 'Reflective Titanium'
    },
    cardImg: {
      src: '/assets/commerce/cr/product/mirrored-f.png',
      dim: {w: 700, h: 442 },
      alt: 'Sovereign Card Reflective Titanium'
    },
    animation: '../../assets/content/mirroed-card.mp4'
  }],
  annualFee: 4999,
  initiationFee: 49500,
  replacementFee: 89,
  rewardPct: 11,
  fxRatePct: 0,
  maxAccountHolders: 10,
  travelBenefits: <TravelBenefits/>,
  lifestyleBenefits: <LifestyleBenefits/>,
  rewards: <Rewards/>,
  preview: <Preview/>,
  karmaRewards: [
    {
      multiplier: 5,
      title: 'Flights',
      description: 'on flights booked directly with airlines.'
    },
    {
      multiplier: 5,
      title: 'Hotels',
      description: 'on prepaid hotels worldwide.'
    },
    {
      multiplier: 1,
      title: 'Every Purchase',
      description: 'anytime you use your card in every country for anything you can purchase with your Lux card.'
    }
  ],
  cardDetails: {
    intro: [
      {
        title: 'Never miss a payment again',
        description: 'Each user has unlimited time to pay off their balance and we don\'t charge any late fees or effect ones credit score. Never worry about losing your account as you have unlimited time to pay off your balance or wait for the rewards to settle it.'
      },
      {
        title: 'Automate payment with rewards',
        description: 'Earn 11% rewards off your average available credit automatically, you can also use it to pay off your balance as you spend or pay your annual fee.'
      },
      {
        title: 'Lifestyle Perks and Financial Wellness',
        description: 'Unlock a world where luxury concierge services and AI personal assistants streamline your daily tasks and travel plans. Access exclusive events, top wellness and fitness clubs, and bespoke experiences that cater to your refined tastes. '
      }
    ],
    benefits: benefits
  },
  quickview: { row1, row2 }
}

export {
  card as default,
}