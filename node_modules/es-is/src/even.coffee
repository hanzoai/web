import isInfinite from './infinite'
import isNumber   from './number'

# Test if `value` is an even number.
#
# @param {Number} value value to test
# @return {Boolean} true if `value` is an even number, false otherwise
# @api public
export default isEven = (value) ->
  isInfinite(value) or
  isNumber(value) and
  value == value and
  value % 2 == 0
