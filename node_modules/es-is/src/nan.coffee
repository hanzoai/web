import isNumber from './number'

# Test if `value` is not a number.
#
# @param {Mixed} value value to test
# @return {Boolean} true if `value` is not a number, false otherwise
# @api public
export default isNaN = (value) ->
  !isNumber(value) or value != value
