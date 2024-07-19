import type {
    Block,
    ScreenfulBlock,
    ElementBlock,
} from '@hanzo/ui/blocks'
import { cn } from '@hanzo/ui/util'

import case_studies from '../../case-study'
import type { CaseStudyType } from '@/types/case-study'
import { LinkElement } from '@hanzo/ui/primitives'
import type { LinkDef } from '@hanzo/ui/types'

export default case_studies.map((item: CaseStudyType, index) => (
    {
        blockType: 'screenful',
        specifiers: 'vert-center full-screen-width',
        columnSpecifiers: ['vert-center mobile-vert-center'],
        contentColumns: [
            [
                {
                    blockType: 'element',
                    element: (
                        <div className={cn('p-6 pt-20 h-full w-full flex text-center 2xl:gap-60 xl:gap-30 gap-20', item.reverse ? 'flex-col-reverse md:flex-row-reverse' : 'flex-col md:flex-row')}>
                            <div className='md:flex-[60%] flex flex-col text-left justify-center 2xl:gap-16 xl:gap-12 gap-8'>
                                <div className='2xl:text-xl text-lg font-semibold'><span>{item.title}</span>: <span>{item.title_description}</span></div>
                                <div className='flex flex-col 2xl:gap-6 gap-4'>
                                    <div className='2xl:text-6xl xl:text-4xl text-3xl'>{item.description}</div>
                                    {item.full_description.map((item_description) => (
                                        <div className='2xl:text-xl text-lg font-light hidden md:block'>{item_description}</div>
                                    ))}
                                </div>
                                <div>
                                    <LinkElement
                                        def={{
                                            href: `/case-study/${item.id}`,
                                            title: 'RESOURCES',
                                            variant: 'outline',
                                            rounded: 'none',
                                            newTab: false
                                        } satisfies LinkDef}
                                        className='w-52 xl:w-60 2xl:w-96 h-15 2xl:h-20 text-base 2xl:text-2xl'
                                    />
                                </div>
                            </div>
                            <div className='md:flex-[40%] flex items-center'>
                                <img src={item.overview_image}></img>
                            </div>
                        </div>
                    )
                } satisfies ElementBlock as Block,
            ]]
    } satisfies ScreenfulBlock
)) satisfies ScreenfulBlock[]
