import type {
  Block,
  ScreenfulBlock,
  ElementBlock,
} from '@hanzo/ui/blocks'
import Link from 'next/link'
import ImpactCard from './impactCard'
//types
import type { Impact } from '@/types';

const _data: Impact[] = [
  { name: 'Triller', founder: 'Jeniffer Patel', role: 'Founder & CEO', description: `Jenifer has spearheaded the green technology industry for over a decade, turning her stgartup into a leading provider of eco-friendly products. GG engergy is a pioneer in green solutions across global markets.."We were Greatefull for the opportunity to work with Hanzo and take the company public."` },
  { name: 'Impact Hub Bali', founder: 'Rebecca Rocco', role: 'Managing Director', description: `Her expertise in deploying new technologies has streamlined operations for numberous finanical institutions. "hanzo's multi-currency payment system is robust and reliable, making it easier for us to handle a global clientele. There commitment to innovation and security is unmatched` },
]

const ImpactItem = ({ name, founder, role, description }: Impact) => (
  <div className="hidden border-t-2 lg:flex pt-8 mb-19 ">
    <div className='flex flex-1'>
      <span className='text-2xl text-muted-1 flex-[30%] '>{name}</span>
      <span className='text-2xl text-muted-1 flex-[35%]'>{founder}</span>
      <span className='text-2xl text-muted-1 flex-[35%]'>{role}</span>
    </div>
    <div className="flex-1 text-xl">
      <p>{description}</p>
    </div>
  </div>
)

export default {
  blockType: 'screenful',
  specifiers: 'vert-center full-screen-width',
  columnSpecifiers: ['vert-center mobile-vert-center'],
  contentColumns: [
    [
      {
        blockType: 'element',
        element: (
          <div className='w-full lg:pl-6 '>
            <div className="border-t-2 lg:flex lg:pt-8 lg:mb-19 px-4">
              <div className='lg:flex lg:flex-1'>
                <h5 className='lg:flex-[30%] text-muted-1 lg:text-primary font-semibold lg:text-xl text-base'>OUR IMPACT</h5>
                <span className=' lg:text-5xl lg:flex-[70%] lg:font-light font-medium text-2xl'>You don't have to take our word for it.</span>
              </div>
              <div className='lg:text-4xl lg:flex-1 text-xl font-light leading-6 lg:mt-0 mt-4'>
                <p>Here's what some of our clients have to say about the power of a well-defined campaign and data driven strategy.</p>
              </div>
            </div>
            <div className='text-base mt-9 lg:hidden'>
              {
                _data.map((_item: Impact, index: number) => (
                  <div key={'title' + _item.name} className="border-t py-4">
                    <Link href={`/impact/${index}`} className='font-light text-muted-1 no-underline'>
                      {_item.name}
                    </Link>
                  </div>
                ))
              }
            </div>
            {
              _data.map((_item: Impact, index: number) => <ImpactItem key={index + '_impact'} name={_item.name} role={_item.role} founder={_item.founder} description={_item.description} />)
            }

          </div>
        )
      } satisfies ElementBlock as Block
    ]
  ]
} satisfies ScreenfulBlock