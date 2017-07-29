import isInfinite    from './infinite'
import {isActualNaN} from './utils'

# Test if `value` is greater than `other`.
#
# @param {Number} value value to test
# @param {Number} other value to compare with
# @return {Boolean}
# @api public
export default isGt = (value, other) ->
  if isActualNaN(value) or isActualNaN(other)
    throw new TypeError('NaN is not a valid value')

  !isInfinite(value) and
  !isInfinite(other) and
  value > other
