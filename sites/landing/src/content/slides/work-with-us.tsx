import type {
    Block,
    ScreenfulBlock,
    ElementBlock,
} from '@hanzo/ui/blocks'
import Link from 'next/link'
import GotoBtn from './details/svg/Gotobtn'
import Work from '@/components/component/work'

export default {
    blockType: 'screenful',
    specifiers: 'vert-center full-screen-width',
    columnSpecifiers: ['vert-center mobile-vert-center'],
    contentColumns: [
        [
            {
                blockType: 'element',
                element: (
                    <Work></Work>
                )
            } satisfies ElementBlock as Block,
        ]
    ]
} satisfies ScreenfulBlock