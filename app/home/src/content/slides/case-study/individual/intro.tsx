import type {
    Block,
    ScreenfulBlock,
    ElementBlock,
} from '@hanzo/ui/blocks'

import { Intro } from '@/components/case-study/intro'

export default {
    blockType: 'screenful',
    specifiers: 'vert-center full-screen-width',
    columnSpecifiers: ['vert-center mobile-vert-center'],
    contentColumns: [
        [
            {
                blockType: 'element',
                element: (
                    <Intro />
                )
            } satisfies ElementBlock as Block,
        ]]
} satisfies ScreenfulBlock
