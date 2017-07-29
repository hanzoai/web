import toString from 'es-tostring'

# Test if `value` is an async function.
#
# @param {Mixed} value value to test
# @return {Boolean} true if `value` is an async function, false otherwise
# @api public
export default isAsyncFunction = (value) ->
  toString(value) == '[object AsyncFunction]'
