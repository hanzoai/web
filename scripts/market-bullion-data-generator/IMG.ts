import type { ImageDef } from '@hanzo/ui/types'

const ASSETS_PATH = '/assets/img/products/'

export default {
  AU_B: { src: ASSETS_PATH + 'gold/gold-bar-pt-800x800.png', dim: {w: 800, h:800 } } satisfies ImageDef, 
  AG_B: { src: ASSETS_PATH + 'silver/silver-bar-pt-800x800.png', dim: {w: 800, h:800 } } satisfies ImageDef, 
  AU_C: { src: ASSETS_PATH + 'gold/gold-coin-700x700.png', dim: {w: 700, h:700 } } satisfies ImageDef, 
  AG_C: { src: ASSETS_PATH + 'silver/silver-coin-700x700.png', dim: {w: 700, h:700 } } satisfies ImageDef, 
  AU_CB: { src: ASSETS_PATH + 'gold/gold-bar-700x700.png', dim: {w: 700, h:700 } } satisfies ImageDef, 
  AG_CB: { src: ASSETS_PATH + 'silver/silver-bar-700x700.png', dim: {w: 700, h:700 } } satisfies ImageDef, 
}
