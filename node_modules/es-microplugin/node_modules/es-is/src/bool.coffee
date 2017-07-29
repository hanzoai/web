import toString from 'es-tostring'

# Test if `value` is a boolean.
#
# @param {Mixed} value value to test
# @return {Boolean} true if `value` is a boolean, false otherwise
# @api public
export default isBool = (value) ->
  toString(value) == '[object Boolean]'
