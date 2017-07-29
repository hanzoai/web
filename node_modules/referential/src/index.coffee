import Ref from './ref'

methods = [
  'extend'
  'get'
  'index'
  'ref'
  'set'
  'value'
  'clear'
  'destroy'

  'on'
  'off'
  'one'
  'trigger'
]

refer = (state, ref=null) ->
  ref ?= new Ref state

  wrapper = (key) -> ref.get key

  for method in methods
    do (method) ->
      wrapper[method] = ->
        ref[method].apply ref, arguments

  wrapper.refer = (key) -> refer null, ref.ref key
  wrapper.clone = (key) -> refer null, ref.clone key
  wrapper

refer.Ref = Ref

export default refer
