# Test if `value` is a promise.
#
# @param {Mixed} value value to test
# @return {Boolean} true if `value` is a promise, false otherwise
# @api public
export default isPromise = (value) ->
  !!value and (
    typeof value == 'object' or
    typeof value == 'function'
  ) and typeof value.then == 'function'
