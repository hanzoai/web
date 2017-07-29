export default function(obj, prop) {
  return {}.hasOwnProperty.call(obj, prop)
}
