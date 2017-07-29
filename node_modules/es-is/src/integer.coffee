import isNumber      from './number'
import {isActualNaN} from './utils'

# Test if `value` is an integer.
#
# @param value to test
# @return {Boolean} true if `value` is an integer, false otherwise
# @api public
export default isInteger = (value) ->
  isNumber(value) and !isActualNaN(value) and value % 1 == 0
