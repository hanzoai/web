import type { VideoDef } from '@hanzo/ui/types'
import { DEF_VIDEO_PROPS } from '../../..'

const video = {
  videoProps: DEF_VIDEO_PROPS,
  poster: '/assets/commerce/ps/product/Lux-PASS-poster.jpg',
  sources: [
    '/assets/commerce/ps/product/LUX-PASS-transcode.mp4', 
    '/assets/commerce/ps/product/LUX-PASS-transcode.webm'
  ],
    // Determin aspect ration from dims manually...
    // https://stackoverflow.com/questions/684015/how-can-i-get-the-resolution-width-and-height-for-a-video-file-from-a-linux-co
  dim: {
    // dims are 658x720, 
    // ratio: 0.914
    
    md: {
      w: 274,
      h: 300
    },
  }
} satisfies VideoDef

export {
  video as default
}