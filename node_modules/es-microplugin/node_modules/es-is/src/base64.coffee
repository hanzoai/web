import isString from './string'

base64Regex = /^([A-Za-z0-9+/]{4})*([A-Za-z0-9+/]{4}|[A-Za-z0-9+/]{3}=|[A-Za-z0-9+/]{2}==)$/

# Test if `value` is a valid base64 encoded string.
#
# @param {Mixed} value value to test
# @return {Boolean} true if 'value' is a base64 encoded string, false otherwise
# @api public
export default isBase64 = (value) ->
  isString(value) and (
    !value.length or base64Regex.test(value)
  )
