import TextBox from './textbox'

export default class GiftMessage extends TextBox
  tag:  'gift-message'
  lookup: 'order.giftMessage'

GiftMessage.register()
