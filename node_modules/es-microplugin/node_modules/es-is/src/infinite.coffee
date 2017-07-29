# Test if `value` is positive or negative infinity.
#
# @param {Mixed} value value to test
# @return {Boolean} true if `value` is positive or negative Infinity, false otherwise
# @api public
export default isInfinite = (value) ->
  value == Infinity or value == -Infinity
