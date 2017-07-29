import isInfinite    from './infinite'
import isNumber      from './number'
import {isActualNaN} from './utils'

# Test if `value` is a decimal number.
#
# @param {Mixed} value value to test
# @return {Boolean} true if `value` is a decimal number, false otherwise
# @api public
export default isDecimal = (value) ->
  isNumber(value) and
  !isActualNaN(value) and
  !isInfinite(value) and
  value % 1 != 0
