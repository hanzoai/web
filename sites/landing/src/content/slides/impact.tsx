import type {
  Block,
  ScreenfulBlock,
  ElementBlock,
} from '@hanzo/ui/blocks'
import Link from 'next/link'

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
              <div className="border-t py-4">
                <Link href={"#"} className='font-light text-muted-1 no-underline'>
                  Damon Motorcycles
                </Link>
              </div>
              <div className="border-t py-4">
                <Link href={"#"} className='font-light text-muted-1 no-underline'>
                  Triller
                </Link>
              </div>
              <div className="border-t py-4">
                <Link href={"#"} className='font-light text-muted-1 no-underline'>
                  Keek.com
                </Link>
              </div>
            </div>
            <div className="hidden border-t-2 lg:flex pt-8 mb-19 ">
              <div className='flex flex-1'>
                <span className='text-2xl text-muted-1 flex-[30%] '>Triller</span>
                <span className='text-2xl text-muted-1 flex-[35%]'>Jeniffer Patel</span>
                <span className='text-2xl text-muted-1 flex-[35%]'>Founder & CEO</span>
              </div>
              <div className="flex-1 text-xl">
                <p>Jenifer has spearheaded the green technology industry for over a decade, turning her stgartup into a leading provider of eco-friendly products. GG engergy is a pioneer in green solutions across global markets.."We were Greatefull for the opportunity to work with Hanzo and take the company public."</p>
              </div>
            </div>
            <div className="border-t-2 lg:flex pt-8 mb-19 hidden">
              <div className="flex flex-1">
                <span className='text-2xl flex-[30%] text-muted-1'>Impact Hub Bali</span>
                <span className='text-2xl text-muted-1 flex-[35%]'>Rebecca Rocco</span>
                <span className='text-2xl text-muted-1 flex-[35%]'>Managing Director</span>
              </div>
              <p className='flex-1 text-xl'>Her expertise in deploying new technologies has streamlined operations for numberous finanical institutions. "hanzo's multi-currency payment system is robust and reliable, making it easier for us to handle a global clientele. There commitment to innovation and security is unmatched</p>
            </div>

          </div>
        )
      } satisfies ElementBlock as Block
    ]
  ]
} satisfies ScreenfulBlock