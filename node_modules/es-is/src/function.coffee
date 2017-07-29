import toString from 'es-tostring'

# Test if `value` is a function.
#
# @param {Mixed} value value to test
# @return {Boolean} true if `value` is a function, false otherwise
# @api public
export default isFunction = (value) ->
  # Is alert
  return true if typeof window != 'undefined' and value == window.alert

  str = toString(value)

  str == '[object Function]' or
  str == '[object GeneratorFunction]' or
  str == '[object AsyncFunction]'
