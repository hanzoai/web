export default function(obj, prop) {
  return Object.prototype.hasOwnProperty.call(obj, prop)
}
