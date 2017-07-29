import hasOwn from 'es-hasown'

import isBool     from './bool'
import isInfinite from './infinite'
import isNumber   from './number'

# Test if `value` is an arraylike object.
#
# @param {Mixed} value value to test
# @return {Boolean} true if `value` is an arguments object, false otherwise
# @api public
export default isArrayLike = (value) ->
  !!value and
  !isBool(value) and
  hasOwn(value, 'length') and
  isFinite(value.length) and
  isNumber(value.length) and
  value.length >= 0
