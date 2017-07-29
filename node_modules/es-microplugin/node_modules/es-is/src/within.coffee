import isInfinite    from './infinite'
import isNumber      from './number'
import {isActualNaN} from './utils'

# Test if `value` is within `start` and `finish`.
#
# @param {Number} value value to test
# @param {Number} start lower bound
# @param {Number} finish upper bound
# @return {Boolean} true if 'value' is is within 'start' and 'finish'
# @api public
export default isWithin = (value, start, finish) ->
  if isActualNaN(value) or isActualNaN(start) or isActualNaN(finish)
    throw new TypeError('NaN is not a valid value')
  else if !isNumber(value) or !isNumber(start) or !isNumber(finish)
    throw new TypeError('all arguments must be numbers')

  isAnyInfinite = isInfinite(value) or
                  isInfinite(start) or
                  isInfinite(finish)

  isAnyInfinite or
  value >= start and
  value <= finish
