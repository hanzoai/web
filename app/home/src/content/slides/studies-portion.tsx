import type {
    Block,
    ScreenfulBlock,
    ElementBlock,
} from '@hanzo/ui/blocks'
import Link from 'next/link'

import { StudiesPortion } from '@/components/component/studies-portion';

export default {
    blockType: 'screenful',
    specifiers: 'vert-center full-screen-width',
    columnSpecifiers: ['vert-center mobile-vert-center'],
    contentColumns: [
        [
            {
                blockType: 'element',
                element: (
                    <StudiesPortion></StudiesPortion>
                )
            } satisfies ElementBlock as Block
        ]
    ]
} satisfies ScreenfulBlock