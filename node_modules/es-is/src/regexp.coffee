import toString from 'es-tostring'

# Test if `value` is a regular expression.
#
# @param {Mixed} value value to test
# @return {Boolean} true if `value` is a regexp, false otherwise
# @api public
export default isRegExp = (value) ->
  toString(value) == '[object RegExp]'
