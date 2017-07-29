import isArray    from './array'
import isFunction from './function'
import isObject   from './object'

# Test if `value` is a primitive.
#
# @param {Mixed} value value to test
# @return {Boolean} true if `value` is a primitive, false otherwise
# @api public
export default isPrimitive = (value) ->
  return true if !value

  return false if typeof value == 'object' or
    isObject(value) or
    isFunction(value) or
    isArray(value)

  true
