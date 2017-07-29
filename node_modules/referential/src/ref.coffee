import isNumber     from 'es-is/number'
import isObject     from 'es-is/object'
import objectAssign from 'es-object-assign'
import observable   from 'riot-observable'

nextId = do ->
  ids = 0
  -> ids++

export default class Ref
  constructor: (@_value, @parent, @key) ->
    @_cache    = {}
    @_children = {}
    @_numChildren = 0
    @_id       = nextId()

    if @parent?
      @parent._children[@_id] = @
      @parent._numChildren++
    observable @
    @

  # Clear the cache
  _mutate: (key) ->
    # TODO: do something smarter with key rather than wiping out entire cache
    @_cache = {}

    # clear children as well
    child._mutate() for id, child of @_children

    @

  # clear everything
  clear: ()->
    @_cache = {}

    child.clear() for id, child of @_children
    @_children = {}
    @_numChildren = 0

    #clear out the values
    @_value = undefined

    if @parent?
      @parent.set @key, undefined

  # Removes reference
  destroy: () ->
    child.destroy() for id, child of @_children
    delete @_cache
    delete @_children
    @off '*'

    if @parent
      delete @parent._children[@_id]
      @parent._numChildren--
    @

  # Get value of this or parent Ref
  value: (state) ->
    unless @parent
      if state?
        @_value = state
      return @_value

    if state?
      @parent.set @key, state
    else
      @parent.get @key

  # Get a ref to this or subtree
  ref: (key) ->
    unless key
      return @

    new Ref null, @, key

  # Get state or subtree
  get: (key) ->
    unless key
      @value()
    else
      return @_cache[key] if @_cache[key]
      @_cache[key] = @index key

  # Set value overwriting tree along way
  set: (key, value) ->
    # handle case of object
    if isObject key
      for k, v of key
        @set k, v

      return @

    oldValue = @get key

    @_mutate key

    unless value?
      # avoid strings/nulls etc being thrown into object assign
      if isObject key
        @value objectAssign @value(), key
      # fall back to standard assignment by setting key to ull/undefined
      else
        @index key, value, false
    else
      @index key, value, false

    # set event
    @_triggerSet key, value, oldValue
    @_triggerSetChildren key, value, oldValue
    @

  _triggerSetChildren: (key, value, oldValue) ->
    return @ if @_numChildren == 0
    key = key + ''
    keyParts = key.split '.'
    partialKey = ''
    childKeys = []
    regExps = {}

    for i, keyPart of keyParts
      if partialKey == ''
        partialKey = keyPart
      else
        partialKey += '.' + keyPart
      childKeys[i] = partialKey

      regExps[partialKey] = new RegExp '^' + partialKey + '\.?'

    for id, child of @_children
      if child.key in childKeys
        childRemainderKey = key.replace regExps[child.key], ''
        child.trigger 'set', childRemainderKey, value, oldValue
        child._triggerSetChildren childRemainderKey, value, oldValue

  _triggerSet: (key, value, oldValue) ->
    @trigger 'set', key, value, oldValue
    if @parent
      parentKey = @key + '.' + key
      @parent._triggerSet parentKey, value, oldValue

  # Deep set some value
  extend: (key, value) ->
    @_mutate key

    unless value?
      @value objectAssign @value(), key
    else
      if isObject value
        @value objectAssign (@ref key).get(), value
      else
        clone = @clone()
        @set key, value
        @value objectAssign clone.get(), @value()
    @

  clone: (key) ->
    new Ref objectAssign {}, @get key

  # Walk tree using key, optionally update value
  index: (key, value, get=true, obj=@value()) ->
    if @parent
      return @parent.index @key + '.' + key, value, get

    if isNumber key
      key = String key

    props = key.split '.'

    if get
      # Get is simple, doesn't need to create properties as it goes
      while prop = props.shift()
        unless props.length
          return obj?[prop]
        obj = obj?[prop]
      return

    if !@_value?
      @_value = {}
      if !obj?
        obj = @_value

    # Set version creates tree if necessary
    while prop = props.shift()
      unless props.length
        return obj[prop] = value
      else
        next = props[0]
        unless obj[prop]?
          if isNaN Number next
            obj[prop] ?= {}
          else
            obj[prop] ?= []
      obj = obj[prop]
    return
