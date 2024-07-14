import { registerBlockType } from '@hanzo/ui/blocks'

import ItemCTAs from '@/blocks/components/item-ctas'
import ScrollNumBlock from '@/blocks/components/scroll-num'
import DetailsBlock from '@/blocks/components/details'
import ServiceBlock from '@/blocks/components/services'

registerBlockType('item-ctas', ItemCTAs)
registerBlockType('scroll-num', ScrollNumBlock)
registerBlockType('details', DetailsBlock)
registerBlockType('service', ServiceBlock)
