import isArray from './array'

# Test if `value` is an empty array.
#
# @param {Mixed} value value to test
# @return {Boolean} true if `value` is an empty array, false otherwise
# @api public
export default isEmptyArray = (value) ->
  isArray(value) and value.length == 0
