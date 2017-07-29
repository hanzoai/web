import isObject from './object'

# Test if `value` is a hash - a plain object literal.
#
# @param {Mixed} value value to test
# @return {Boolean} true if `value` is a hash, false otherwise
# @api public
export default isHash = (value) ->
  isObject(value) and
  value.constructor == Object and
  !value.nodeType and
  !value.setInterval
