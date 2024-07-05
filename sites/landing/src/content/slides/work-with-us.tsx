import type {
    Block,
    ScreenfulBlock,
    ElementBlock,
} from '@hanzo/ui/blocks'
import Link from 'next/link'
import GotoBtn from './details/svg/Gotobtn'

export default {
    blockType: 'screenful',
    specifiers: 'vert-center full-screen-width',
    columnSpecifiers: ['vert-center mobile-vert-center'],
    contentColumns: [
        [
            {
                blockType: 'element',
                element: (
                    <div className='flex flex-col md:px-4 pt-20 gap-10 md:gap-20 justify-start h-screen'>
                        <div className='flex md:flex-row flex-col gap-8'>
                            <div className='2xl:text-5xl xl:text-4xl md:text-3xl text-xl md:font-normal font-medium md:leading-10 leading-7'>Hanzo doesn't just innovate; we transform our clients into industry leaders through unparalleled technological support.</div>
                            <div className='2xl:text-3xl md:text-2xl text-lg font-light md:leading-8 leading-6'>We're dedicated to advancing technology with a focus on impactful, global change. At Hanzo, we see the transformative potential in every business—that's why we're here to enhance your solutions and extend your reach.</div>
                        </div>
                        <div className='flex flex-col md:flex-row md:justify-around w-full border-t-2 pt-4 md:pt-6 gap-4 md:gap-0'>
                            <div className='flex-1 2xl:text-4xl xl:text-3xl md:text-2xl text-[32px] font-medium'>Work with us</div>
                            <div className='flex-1 text-base font-light leading-5 '>We are excited to understand your organization's unique needs and help you develop a distinctive, effective digital strategy and campaign that stands out.</div>
                            <div className='flex-1 text-left md:text-center'>
                                <div className='text-base'>You can contact us at: </div>
                                <div className='text-base'><Link href={'mailto:info@hanzo.ai'} className=' underline'>info@hanzo.ai</Link></div>
                            </div>
                            <div className='flex-1 2xl:text-2xl md:text-xl text-base font-bold md:font-normal flex justify-start md:justify-center'>
                                <Link href={'mailto:info@hanzo.ai'} className='md:!underline !no-underline'>Get in Touch </Link>
                                <GotoBtn className='hidden w-[16px] ml-3' />
                            </div>
                        </div>
                    </div>
                )
            } satisfies ElementBlock as Block,
        ]
    ]
} satisfies ScreenfulBlock