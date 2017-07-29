trim = (s) ->
  s.replace(/^\s*|\s*$/g, '');

isArray = (obj) ->
  Object::toString.call(obj) == '[object Array]'

export default parseHeaders = (headers) ->
  return {} unless headers

  result = {}

  for row in trim(headers).split('\n')
    index = row.indexOf(':')
    key = trim(row.slice(0, index)).toLowerCase()
    value = trim(row.slice(index + 1))
    if typeof result[key] == 'undefined'
      result[key] = value
    else if isArray(result[key])
      result[key].push value
    else
      result[key] = [
        result[key]
        value
      ]
    return
  result
