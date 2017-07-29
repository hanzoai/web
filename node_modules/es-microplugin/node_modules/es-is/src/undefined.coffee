# Test if `value` is undefined.
#
# @param {Mixed} value value to test
# @return {Boolean} true if `value` is undefined, false otherwise
# @api public
export default isUndefined = (value) ->
  typeof value == 'undefined'
