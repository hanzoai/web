import toString from 'es-tostring'

import isArrayLike from './array-like'
import isArray     from './array'
import isFunction  from './function'
import isObject    from './object'

# Test if `value` is an arguments object.
#
# @param {Mixed} value value to test
# @return {Boolean} true if `value` is an arguments object, false otherwise
# @api public
export default isArguments = (value) ->
  isStandardArguments = toString(value) == '[object Arguments]'

  isOldArguments = !isArray(value) and
                   isArrayLike(value) and
                   isObject(value) and
                   isFunction(value.callee)

  isStandardArguments or isOldArguments
