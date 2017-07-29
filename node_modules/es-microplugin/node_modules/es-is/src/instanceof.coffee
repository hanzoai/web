# Test if `value` is an instance of `constructor`.
#
# @param {Mixed} value value to test
# @return {Boolean} true if `value` is an instance of `constructor`
# @api public
export default isInstanceOf = (value, constructor) ->
  value instanceof constructor
