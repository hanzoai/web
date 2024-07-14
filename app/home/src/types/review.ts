
import type { ImageDef } from '@hanzo/ui/types'

interface Review {
  image: ImageDef
  title: string
  text: string
  author: string
  href?: string
}

export {
  type Review,
}
