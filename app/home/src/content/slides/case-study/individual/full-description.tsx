import type {
    Block,
    ScreenfulBlock,
    ElementBlock,
} from '@hanzo/ui/blocks'

import case_studies from '@/content/case-study'

let block = null

if (typeof window !== 'undefined') {
    console.log(window.location.pathname)
    const slug = window.location.pathname.split("case-study/")[1]
    if (slug) {
        if (parseInt(slug) >= 0 && parseInt(slug) < 11) {
            block = case_studies[parseInt(slug)]
        }
    }
}

export default
    {
        blockType: 'screenful',
        specifiers: 'vert-center full-screen-width',
        columnSpecifiers: ['vert-center mobile-vert-center'],
        contentColumns: [
            [
                {
                    blockType: 'element',
                    element: (
                        <div className='pt-20 px-6 2xl:px-16 h-full w-full flex flex-col items-center justify-center gap-8 lg:gap-12 xl:gap-16 2xl:gap-20'>
                            <div className='flex flex-col w-full gap-4 lg:gap-6 xl:gap-8 2xl:gap-10'>
                                <div className='text-xl lg:text-2xl xl:text-3xl 2xl:text-4xl font-semibold uppercase'>STRATEGY</div>
                                <ul className='flex flex-col w-full text-base lg:text-lg xl:text-xl 2xl:text-2xl font-light !list-disc !list-inside gap-1 pl-8'>
                                    {
                                        block?.strategy.map((item, index) => (
                                            <li key={index} className='!mb-0'>{item}</li>
                                        ))
                                    }
                                </ul>
                            </div>
                            {
                                block?.result &&
                                <div className='flex flex-col w-full gap-4 lg:gap-6 xl:gap-8 2xl:gap-10'>
                                    <div className='text-xl lg:text-2xl xl:text-3xl 2xl:text-4xl font-semibold uppercase'>RESULT</div>
                                    <ul className='flex flex-col w-full text-base lg:text-lg xl:text-xl 2xl:text-2xl font-light !list-disc !list-inside gap-1 pl-8'>
                                        {
                                            block?.result.map((item, index) => (
                                                <li key={index} className='!mb-0'>{item}</li>
                                            ))
                                        }
                                    </ul>
                                </div>
                            }
                        </div>
                    )
                } satisfies ElementBlock as Block,
            ]]
    } satisfies ScreenfulBlock
