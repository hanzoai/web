import type {
  Block,
  ScreenfulBlock,
  ElementBlock,
} from '@hanzo/ui/blocks'

export default {
  blockType: 'screenful',
  specifiers: 'vert-center full-screen-width',
  columnSpecifiers: ['vert-center mobile-vert-center'],
  contentColumns: [
    [
      {
        blockType: 'element',
        element: (
          <div className='w-full pl-6'>
            <div className="border-t-2 flex pt-8 mb-19">
              <div className='flex flex-1'>
                <h5 className='flex-[30%]'>OUR IMPACT</h5>
                <span className=' text-5xl flex-[70%]'>You don't have to take our word for it.</span>
              </div>
              <div className=' text-4xl flex-1'>
                <p>Here's what some of our clients have to say about the power of a well-defined campaign and data driven strategy.</p>
              </div>
            </div>
            <div className="border-t-2 flex pt-8 mb-19">
              <div className='flex flex-1'>
                <span className='text-2xl text-muted-1 flex-[30%] '>Triller</span>
                <span className='text-2xl text-muted-1 flex-[35%]'>Jeniffer Patel</span>
                <span className='text-2xl text-muted-1 flex-[35%]'>Founder & CEO</span>
              </div>
              <div className="flex-1 text-xl">
                <p>Jenifer has spearheaded the green technology industry for over a decade, turning her stgartup into a leading provider of eco-friendly products. GG engergy is a pioneer in green solutions across global markets.."We were Greatefull for the opportunity to work with Hanzo and take the company public."</p>
              </div>
            </div>
            <div className="border-t-2 flex pt-8 mb-19">
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