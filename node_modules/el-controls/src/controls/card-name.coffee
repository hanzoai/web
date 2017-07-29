import Text from './text'

class CardName extends Text
  tag:    'card-name'
  lookup: 'payment.account.name'

CardName.register()

export default CardName
