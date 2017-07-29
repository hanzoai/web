import toString from 'es-tostring'

# Test if `value` is a generator function.
#
# @param {Mixed} value value to test
# @return {Boolean} true if `value` is a generator function, false otherwise
# @api public
export default isGeneratorFunction = (value) ->
  toString(value) == '[object GeneratorFunction]'
