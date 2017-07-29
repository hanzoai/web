import './utils/patches'

import countriesData from  './data/countries'
import statesData from './data/states'

import { luhnCheck, cardFromNumber, cardType, restrictNumeric } from './utils/card'

export {
  Control
  Text
  TextBox
  Checkbox
  Select
  QuantitySelect
  CountrySelect
  StateSelect
  UserEmail
  UserName
  UserCurrentPassword
  UserPassword
  UserPasswordConfirm
  ShippingAddressName
  ShippingAddressLine1
  ShippingAddressLine2
  ShippingAddressCity
  ShippingAddressPostalCode
  ShippingAddressState
  ShippingAddressCountry
  CardName
  CardNumber
  CardExpiry
  CardCVC
  Terms
  GiftToggle
  GiftType
  GiftEmail
  GiftMessage
  PromoCode
} from './controls'

import Events from './events'

export { Events }

export data = {
  countries: countriesData
  states:    statesData
}

export utils = {
  card:
    luhnCheck:       luhnCheck
    cardFromNumber:  cardFromNumber
    cartType:        cardType
    restrictNumeric: restrictNumeric
}
