import type { PaymentMethodDesc } from '@/type'

import Card from './card'
import Crypto from './crypto'
import BankTransfer from './bank-transfer'

export default [
  {
    value: 'card',
    label: 'Card',
    Comp: Card
  },
  {
    value: 'crypto',
    label: 'Wallet',
    Comp: Crypto
  },
  {
    value: 'bank',
    label: 'Bank Wire',
    Comp: BankTransfer
  },
] satisfies PaymentMethodDesc[]