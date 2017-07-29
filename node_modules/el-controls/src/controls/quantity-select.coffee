import Select from './select'

opts = {}

for i in [1...100]
  opts[i] = i

export default class QuantitySelect extends Select
  tag: 'quantity-select'
  lookup: 'quantity'
  options: ->
    return opts

  init: ()->
    super

  readOnly: true

  getValue: (event)->
    return parseFloat($(event.target).val()?.trim())

  change: (e)->
    # riot phantom tag issue
    if !e.target?
      return

    oldValue = @data.get 'quantity'
    super
    newValue = @data.get 'quantity'
    @data.set 'quantity', oldValue

    #unset and reset using cart to get correct analytics/side effects
    @cart.set @data.get('productId'), newValue

QuantitySelect.register()

