NON_HOST_TYPES =
  'boolean': 1
  number:    1
  string:    1
  undefined: 1

# Test if `value` is hosted by `host`.
#
# @param {Mixed} value to test
# @param {Mixed} host host to test with
# @return {Boolean} true if `value` is hosted by `host`, false otherwise
# @api public
export default isHosted = (value, host) ->
  type = typeof host[value]
  if type == 'object' then ! !host[value] else !NON_HOST_TYPES[type]
