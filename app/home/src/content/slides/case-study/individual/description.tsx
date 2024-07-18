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
                        <div className='pt-20 px-6 2xl:px-16 h-full w-full flex flex-col items-center justify-center gap-10'>
                            <div className='md:flex-[85%] flex items-center justify-center w-full overflow-hidden rounded-lg xl:rounded-xl 2xl:rounded-2xl'>
                                <img src={block?.individual_image} className='w-full'></img>
                            </div>
                            <span className='md:flex-[15%] text-xl md:text-2xl lg:text-3xl xl:text-4xl 2xl:text-[52px] text-center font-normal'>
                                {block?.description}
                            </span>
                        </div>
                    )
                } satisfies ElementBlock as Block,
            ]]
    } satisfies ScreenfulBlock
