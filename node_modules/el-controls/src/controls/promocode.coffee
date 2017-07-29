import Text from './text'
import html from '../../templates/controls/text-normal-placeholder'

export default class PromoCode extends Text
  tag:  'promocode'
  lookup: 'order.promoCode'
  html:   html

PromoCode.register()
