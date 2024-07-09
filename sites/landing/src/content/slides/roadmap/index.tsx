import { type ScreenfulBlock, type ElementBlock, type Block } from '@hanzo/ui/blocks'
import SVG_crypto_native from './svg/crypto-native-card.svg'
import SVG_elevated from './svg/elevated-experiences.svg'
import SVG_hotels from './svg/launch-of-lux-hotels.svg'
import SVG_multisigner from './svg/multisigner.svg'
import Roadmap from '@/components/roadmap'

const bylines = [
  'Enjoy complete asset sovereignty over digital assets kept in your quantum-proof Lux Wallet.',
  'Choose from 4 credit tiers and make a selection from our beautiful, rare metal cards to spend up to 50% of your crypto assets without ever selling your crypto.',
  'Official rewards unlocked and VIP program commences including a range of services such as wellness packages, concierge services, private jet access, exclusive retreats, discounts on your favorite apps/ subscriptions and more.',
  'Launch and rollout for Lux Corporate Credit Cards and multi-signer accounts.',
  'Premium access to iconic hotels, properties and villas all under the Lux Properties umbrella, and a chance to invest personally.'
]

const iconStyle = 'w-[8rem] h-[8rem] md:w-[10rem] md:h-[10rem]'

export default {
  blockType: 'screenful',
  specifiers: 'no-gutters',
  columnSpecifiers: ['vert-center center mobile-vert-center'],
  contentColumns: [[
    {blockType: 'element',
      element: 
        <Roadmap
          title='THE FUTURE IS LUX'
          description={bylines[0]}
          milestones={[
            {
              icon: <SVG_crypto_native className={iconStyle}/>,
              preheading: '01',
              heading: 'Crypto Native Credit Card Unleashed',
              byline: bylines[1]
            },
            {
              icon: <SVG_elevated className={iconStyle}/>,
              preheading: '02',
              heading: 'Community and Elevated Lifestyle Experiences ',
              byline: bylines[2]
            },
            {
              icon: <SVG_hotels className={iconStyle}/>,
              preheading: '03',
              heading: 'Corporate Cards and Multi-Signer Accounts',
              byline: bylines[3]
            },
            {
              icon: <SVG_multisigner className={iconStyle}/>,
              preheading: '04',
              heading: 'Launch of Lux Hotels & Properties.',
              byline: bylines[4]
            }
          ]}
        />
    } satisfies ElementBlock as Block,
  ]], 
} as ScreenfulBlock