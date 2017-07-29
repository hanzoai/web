import toString from 'es-tostring'

# Test date.

# Test if `value` is a date.
#
# @param {Mixed} value value to test
# @return {Boolean} true if `value` is a date, false otherwise
# @api public
export default isDate = (value) ->
  toString(value) == '[object Date]'
