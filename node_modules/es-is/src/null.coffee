# Test if `value` is null.
#
# @param {Mixed} value value to test
# @return {Boolean} true if `value` is null, false otherwise
# @api public
export default isNull = (value) ->
  value == null
