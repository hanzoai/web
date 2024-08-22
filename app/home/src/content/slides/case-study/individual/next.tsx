import type {
    Block,
    ScreenfulBlock,
    ElementBlock,
} from '@hanzo/ui/blocks'

import { Next } from '@/components/case-study/next'

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
                        <Next />
                    )
                } satisfies ElementBlock as Block,
            ]]
    } satisfies ScreenfulBlock
