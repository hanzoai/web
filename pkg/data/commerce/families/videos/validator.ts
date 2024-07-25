import type { VideoDef } from '@hanzo/ui/types'
import { DEF_VIDEO_PROPS } from '../../..'

const video = {
  videoProps: DEF_VIDEO_PROPS, 
  poster: '/assets/commerce/vl/product/Lux-VALIDATOR-poster.jpg',
  sources: [
    '/assets/commerce/vl/product/Lux-VALIDATOR-transcode.mp4', 
    '/assets/commerce/vl/product/Lux-VALIDATOR-transcode.webm'
  ],
    // Determin aspect ration from dims manually...
    // https://stackoverflow.com/questions/684015/how-can-i-get-the-resolution-width-and-height-for-a-video-file-from-a-linux-co
  dim: {
    // dims are 656x484, let's cut in half
    // ratio: 1.355

    md: {
      w: 328,
      h: 242
    },
  }
} satisfies VideoDef

export {
  video as default
}