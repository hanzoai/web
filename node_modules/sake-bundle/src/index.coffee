handroll = ->
  require 'handroll'

bundle = (opts) ->
  handroll().bundle opts

bundle.write = (opts) ->
  handroll().write opts

export default (opts = {}) ->
  unless opts.global == false
    global.bundle = bundle
    Object.defineProperty global, 'Bundle',
      get: ->     handroll().Bundle
      enumerable: true

  if opts.entry?
    task 'bundle', 'bundle javascript', ->
      bundle.write opts
