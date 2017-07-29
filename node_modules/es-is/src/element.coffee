# Test if `value` is an html element.
#
# @param {Mixed} value value to test
# @return {Boolean} true if `value` is an HTML Element, false otherwise
# @api public
export default isElement = (value) ->
  value != undefined and
  typeof HTMLElement != 'undefined' and
  value instanceof HTMLElement and
  value.nodeType == 1
