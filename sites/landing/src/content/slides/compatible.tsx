import type {
  Block,
  EnhHeadingBlock,
  ElementBlock,
  VideoBlock,
  ScreenfulBlock,
  SpaceBlock,
} from '@hanzo/ui/blocks'
import { BlocksComponent } from '@hanzo/ui/blocks'
import { Button, LinkElement } from '@hanzo/ui/primitives'
import { DEF_VIDEO_PROPS } from '@luxfi/data'

const byline = 'Every vard lets you earn points that pay off your balance, AND has access to exclusive Lux Card Benefits.'

// :aa TODO clean this up!
const viewAllCards = {
  blockType: 'element',
  element: <a className='!w-full max-w-56' href='/cards' style={{textDecoration: 'none'}}><Button variant='outline' className='!w-full max-w-56'>View All Cards</Button></a>
} satisfies ElementBlock as Block

const compare = {
    blockType: 'element',
    element: <a className='!w-full max-w-56' href='/compare' style={{textDecoration: 'none'}}><Button variant='primary' className='!w-full max-w-56'>Compare Cards</Button></a>
} satisfies ElementBlock as Block


export default {
    blockType: 'screenful',
    specifiers: 'vert-center',
    columnSpecifiers: ['vert-center mobile-vert-center', 'vert-center mobile-vert-center'],
    contentColumns: [[
        {
            blockType: 'video',
            videoProps: DEF_VIDEO_PROPS,
            sources: ['/assets/content/iradescent-chrome-video.mp4'],
            dim: { 
                md: {w: 600, h: 300},
             },
             sizing: {vh: 100, mobile: {vw: 100}}
        } satisfies VideoBlock as Block,
        {blockType: 'element', element: (
        <LinkElement 
            def={{ variant: 'link', href: '/cards/founder?sku=LXM-CR-F-CC' }}
            className='w-full text-xs !text-muted-2 hover:!text-foreground italic !text-center !no-underline'
        >
            Founder Card
        </LinkElement>
        )} satisfies ElementBlock as Block,
    ], [
        {
            blockType: 'enh-heading',
            heading: { text: 'COMPATIBLE WITH YOUR LIFESTYLE', level: 3, mb: 7 },
            byline: { text: byline, level: 6 },
        } satisfies EnhHeadingBlock,
        { blockType: 'space', level: 0 } satisfies SpaceBlock as Block,
        { blockType: 'element', element: <div className='!w-full sm:w-auto grid grid-cols-2 gap-2 sm:flex sm:flex-row items-center sm:gap-4 lg:gap-6 self-center'><BlocksComponent blocks={[viewAllCards, compare]}/></div> } satisfies ElementBlock as Block,
    ]]
} as ScreenfulBlock
