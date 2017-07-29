import isArrayLike   from './array-like'
import {isActualNaN} from './utils'

# Test if `value` is greater than 'others' values.
#
# @param {Number} value value to test
# @param {Array} others values to compare with
# @return {Boolean} true if `value` is greater than `others` values
# @api public
export default isMax = (value, others) ->
  if isActualNaN(value)
    throw new TypeError('NaN is not a valid value')
  else if !isArrayLike(others)
    throw new TypeError('second argument must be array-like')
  len = others.length
  while --len >= 0
    if value < others[len]
      return false
  true
