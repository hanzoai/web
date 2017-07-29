import isFunction from './function'

# Test if `value` is a generator.
#
# @param {Mixed} value value to test
# @return {Boolean} true if `value` is a generator, false otherwise
# @api public
export default isGenerator = (value) ->
  (isFunction value?.next) and (isFunction value.throw)
