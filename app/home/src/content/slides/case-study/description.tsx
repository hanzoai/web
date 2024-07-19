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
                    <div className='p-6 pt-20 h-full w-full flex flex-col items-center justify-center text-center gap-[200px]'>
                        <div className='2xl:text-[52px] xl:text-4xl text-3xl font-light 2xl:leading-[64px] xl:leading-[48px] leading-10 text-center'>
                            Hanzo.ai an <span className='font-bold'>AI-powered agency</span> and platform, has been instrumental in driving the growth and success of numerous high-profile projects across various industries. This case study compilation highlights Hanzo's impactful work, showcasing the power of AI-driven strategies in achieving remarkable outcomes.
                        </div>
                        <div className='flex flex-col items-center justify-center text-center gap-6'>
                            <div className='2xl:text-3xl xl:text-2xl text-xl'>
                                We are your partners to win the most difficult of marketing lifts
                            </div>
                            <div className='2xl:text-[52px] xl:text-4xl text-3xl font-light'>
                                We take you from <span className='font-bold'>0</span> to <span className='font-bold'>1</span>
                            </div>
                        </div>
                    </div>
                )
            } satisfies ElementBlock as Block,
        ]]
} satisfies ScreenfulBlock
