import type {
  Block,
  ScreenfulBlock,
  ElementBlock,
} from '@hanzo/ui/blocks'
import GotoBtn from './details/video/Gotobtn'

export default {
  blockType: 'screenful',
  specifiers: 'vert-center full-screen-width',
  columnSpecifiers: ['vert-center mobile-vert-center'],
  contentColumns: [
    [
      {
        blockType: 'element',
        element: (
          <div className='flex flex-col h-full items-center justify-around px-4 mt-9'>
            <div className='lg:flex '>
              <div className='text-2xl font-medium leading-[29px]'>Hanzo doesn't just innovate; we transform our clients into industry leaders through unparalleled technological support.</div>
              <div className=' text-xl font-light leading-6 mt-[27px]'>We're dedicated to advancing finance with a focus on impactful, global change. At Hanzo, we see the transformative potential in every business—that's why we're here: to enhance your financial solutions and extend your reach.</div>
            </div>
            <div className='justify-around pt-8 mb-19 w-full'>
              <div className='max-w-[324px] text-[32px] font-normal'>Work with us</div>
              <div className='text-base max-w-[415px]  mt-[20px]'>We are excited to understand your organization's unique needs and help you develop a distinctive, effective digital strategy and campaign that stands out.</div>
              <div className='text-[16px] max-w-[173px] mt-[20px]'>You can contact us at: </div>
              <div className='text-[16px] max-w-[173px] mt-[20px]'>info@hanzo.ai</div>

              <div className=' text-base font-bold max-w-[179px] flex mt-[20px]'>
                <span>Get in Touch </span>
                <GotoBtn className='w-[16px] ml-3' />
              </div>
            </div>
          </div>
        )
      } satisfies ElementBlock as Block,
    ]
  ]
} satisfies ScreenfulBlock



