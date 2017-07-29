import isBool from './bool'

# Test if `value` is true.
#
# @param {Mixed} value value to test
# @return {Boolean} true if `value` is true, false otherwise
# @api public
export default isTrue = (value) ->
  isBool(value) and Boolean(Number(value)) == true
