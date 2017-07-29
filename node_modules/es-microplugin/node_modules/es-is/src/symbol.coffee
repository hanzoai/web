import toString from 'es-tostring'

symbolValueOf = if typeof Symbol == 'function' then Symbol::valueOf else undefined

# Test if `value` is an ES6 Symbol
#
# @param {Mixed} value value to test
# @return {Boolean} true if `value` is a Symbol, false otherise
# @api public
export default isSymbol = (value) ->
  typeof Symbol == 'function' and
  toString(value) == '[object Symbol]' and
  typeof symbolValueOf.call(value) == 'symbol'
