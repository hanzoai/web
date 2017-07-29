import isString from './string'

hexRegex = /^[A-Fa-f0-9]+$/

# Test if `value` is a valid hex encoded string.
#
# @param {Mixed} value value to test
# @return {Boolean} true if 'value' is a hex encoded string, false otherwise
# @api public
export default isHex = (value) ->
  isString(value) and (
    !value.length or
    hexRegex.test(value)
  )
