import cookies from 'es-cookies'
import md5     from 'es-md5'

export default do ->
  postFix = md5 window.location.host
  key = (k) -> "#{k}_#{postFix}"

  get: (k) ->
    cookies.getJSON key k

  set: (k, v) ->
    ks = (cookies.getJSON key '_keys') ? []
    ks.push k
    cookies.set (key '_keys'), ks
    cookies.set (key k), v

  remove: (k) ->
    cookies.remove key k

  clear: ->
    ks = (cookies.getJSON key '_keys') ? []
    for k in ks
      cookies.remove k
    cookies.remove key '_keys'
