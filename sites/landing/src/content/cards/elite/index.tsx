import type { Card } from '@luxfi/data/commerce/types'

import TravelBenefits from './travel-benefits.mdx'
import LifestyleBenefits from './lifestyle-benefits.mdx'
import Rewards from './rewards.mdx'
import Preview from './preview.mdx'
import { row1, row2 } from './quickview'
import benefits from '../benefits'

const card: Card = {
  category: 'elite',
  title: 'Elite Card',
  rarity: '1/10,000',
  materials: [
    {
      title: '24k Gold',
      titleAlt: '24K Gold',
      sku: 'LXM-CR-E-24G',
      materialImg: {
        src: '/assets/commerce/cr/product/option/elite-card-gold-100x99.png',
        dim: {w: 100, h: 99 },
        alt: '24k Gold'
      },
      cardImg: {
        src: '/assets/commerce/cr/product/gold-f.png',
        dim: {w: 700, h: 442 },
        alt: 'Elite Card 24k Gold'
      },
      animation: '../../assets/content/gold-card.mp4'
    },
    {
      title: 'Sterling Silver',
      titleAlt: 'Sterling Silver',
      sku: 'LXM-CR-E-SS',
      materialImg: {
        src: '/assets/commerce/cr/product/option/elite-card-silver-99x99.png',
        dim: {w: 99, h: 99 },
        alt: 'Sterling Silver'
      },
      cardImg: {
        src: '/assets/commerce/cr/product/Sterling-Silver-F.png',
        dim: {w: 700, h: 441 },
        alt: 'Elite Card Sterling Silver'
      },
      animation: '../../assets/content/gold-card.mp4'
    }
  ],
  annualFee: 999,
  initiationFee: 9999,
  replacementFee: 79,
  rewardPct: 10,
  fxRatePct: 0.25,
  maxAccountHolders: 5,
  travelBenefits: <TravelBenefits/>,
  lifestyleBenefits: <LifestyleBenefits/>,
  rewards: <Rewards/>,
  preview: <Preview/>,
  karmaRewards: [
    {
      multiplier: 3,
      title: 'Flights & Hotels',
      description: 'on travel including airfare, hotels, cruises, tours, car rentals, campgrounds, vacation rentals, travel purchases on third party travel websites, and travel purchases.'
    },
    {
      multiplier: 3,
      title: 'Transit',
      description: 'on transit including trains, taxicabs, rideshare services, ferries, tolls, parking, buses, and subways.'
    },
    {
      multiplier: 3,
      title: 'Food & Dining',
      description: 'on dining at restaurants worldwide, including takeout and delivery worldwide.'
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
        description: 'Earn 8% rewards off your average available credit automatically, you can also use it to pay off your balance as you spend or pay your annual fee.'
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
  card as default
}