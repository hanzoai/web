import isDate from './date'

# Test if `value` is a valid date.
#
# @param {Mixed} value value to test
# @returns {Boolean} true if `value` is a valid date, false otherwise
export default isValidDate = (value) ->
  isDate(value) and !isNaN(Number(value))
