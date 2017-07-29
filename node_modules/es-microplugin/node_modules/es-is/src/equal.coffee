import toString from 'es-tostring'

# Test if `value` is equal to `other`.
#
# @param {Mixed} value value to test
# @param {Mixed} other value to compare with
# @return {Boolean} true if `value` is equal to `other`, false otherwise
export default isEqual = (value, other) ->
  return true if value == other

  type = toString value

  if type != toString(other)
    return false

  if type == '[object Object]'
    for key of value
      if !isEqual(value[key], other[key]) or !(key of other)
        return false
    for key of other
      if !isEqual(value[key], other[key]) or !(key of value)
        return false
    return true

  if type == '[object Array]'
    key = value.length
    if key != other.length
      return false
    while key--
      if !isEqual(value[key], other[key])
        return false
    return true

  if type == '[object Function]'
    return value.prototype == other.prototype

  if type == '[object Date]'
    return value.getTime() == other.getTime()

  false
