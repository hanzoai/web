export default (backend) ->
  root  = if typeof window == 'undefined' then global else window
  store = root[backend+'Storage']

  get: (k) ->
    try
      JSON.parse store.getItem k
    catch err
      console.error 'Unable to parse', k
      undefined

  set: (k, v) ->
    store.setItem k, JSON.stringify v

  remove: (k) ->
    store.removeItem k

  clear: ->
    store.clear()
