import type { VideoDef } from '@hanzo/ui/types'
import { DEF_VIDEO_PROPS } from '../../..'

const video = {
  videoProps: DEF_VIDEO_PROPS, 
  poster: '/assets/commerce/silver/product/luxsilver-poster.jpg',
  sources: ['/assets/commerce/silver/product/luxsilver.mp4'],
    // From manually looking at aspect ratio
    // https://stackoverflow.com/questions/684015/how-can-i-get-the-resolution-width-and-height-for-a-video-file-from-a-linux-co
  dim: {
    md: {
      w: 200,
      h: 327
    },
  }
} satisfies VideoDef

export {
  video as default
}