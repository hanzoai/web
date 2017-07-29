import isBool from './bool'

# Test if `value` is false.
#
# @param {Mixed} value value to test
# @return {Boolean} true if `value` is false, false otherwise
# @api public
export default isFalse = (value) ->
  isBool(value) and Boolean(Number(value)) == false
