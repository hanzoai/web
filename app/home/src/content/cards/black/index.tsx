import type { Card } from '@luxfi/data/commerce/types'

import TravelBenefits from './travel-benefits.mdx'
import LifestyleBenefits from './lifestyle-benefits.mdx'
import Rewards from './rewards.mdx'
import Preview from './preview.mdx'
import { row1, row2 } from './quickview'
import benefits from '../benefits'

const card: Card = {
  category: 'black',
  title: 'Black Card',
  rarity: 'Unlimited',
  materials: [
    {
      title: 'Anodized Black Titanium',
      titleAlt: 'Matte Titanium',
      sku: 'LXM-CR-B-ABT',
      materialImg: {
        src: '/assets/commerce/cr/product/option/black-card-anodized-black-titanium-100x99.png',
        dim: {w: 100, h: 99 },
        alt: 'Anodized Black Titanium'
      },
      cardImg: {
        src: '/assets/commerce/cr/product/black-titanium-back.png',
        dim: {w: 800, h: 441 },
        alt: 'Black Card Anodized Black Titanium'
      },
      animation: '../../assets/content/gunmetal-card.mp4'
    },
    {
      title: 'Black Gunmetal',
      titleAlt: 'Gun Metal',
      sku: 'LXM-CR-B-GM',
      materialImg: {
        src: '/assets/commerce/cr/product/option/black-card-gunmetal-99x99.png',
        dim: {w: 99, h: 99 },
        alt: 'Black Gunmetal'
      },
      cardImg: {
        //TODO: Change this to the correct image
        src: '/assets/commerce/cr/product/black-f.png',
        dim: {w: 700, h: 441 },
        alt: 'Black Card Black Gunmetal',
      },
      animation: '../../assets/content/gunmetal-card.mp4'
    }
  ],
  annualFee: 99,
  initiationFee: 999,
  replacementFee: 49,
  rewardPct: 8,
  fxRatePct: 1,
  maxAccountHolders: 2,
  travelBenefits: <TravelBenefits/>,
  lifestyleBenefits: <LifestyleBenefits/>,
  rewards: <Rewards/>,
  preview: <Preview/>,
  karmaRewards: [
    {
      multiplier: 2,
      title: 'Food & Dining',
      description: 'at restaurants worldwide, plus takeout and delivery at home or while traveling.'
    },
    {
      multiplier: 2,
      title: 'Retail Stores',
      description: 'at supermarkets and retail stores worldwide, on up to $25,000 per year in purchases.'
    },
    {
      multiplier: 1,
      title: 'Flights & Hotels',
      description: 'on flights and hotels worldwide up to $100,000.'
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
        description: 'Earn 7% rewards off your average available credit automatically, you can also use it to pay off your balance as you spend or pay your annual fee.'
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