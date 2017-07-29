module.exports = function(obj, prop) {
  return {}.hasOwnProperty.call(obj, prop)
}
