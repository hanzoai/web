import Select from './state-select'

class GiftType extends Select
  tag:    'gift-type'
  lookup: 'order.giftType'

GiftType.register()

export default GiftType
