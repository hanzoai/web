import isInfinite    from './infinite'
import isNumber      from './number'
import {isActualNaN} from './utils'

# Test if `value` is divisible by `n`.
#
# @param {Number} value value to test
# @param {Number} n dividend
# @return {Boolean} true if `value` is divisible by `n`, false otherwise
# @api public
export default isDivisibleBy = (value, n) ->
  isDividendInfinite = isInfinite(value)
  isDivisorInfinite  = isInfinite(n)
  isNonZeroNumber    = isNumber(value) and
                       !isActualNaN(value) and
                       isNumber(n) and
                       !isActualNaN(n) and
                       n != 0

  isDividendInfinite or
  isDivisorInfinite or
  isNonZeroNumber and value % n == 0
