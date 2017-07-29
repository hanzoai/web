# Largely copied from Zousan: https://github.com/bluejava/zousan
import PromiseInspection from './promise-inspection'
import soon from './soon'

# Let the obfiscator compress these down by assigning them to variables
_undefined       = undefined
_undefinedString = 'undefined'

# These are the three possible states (PENDING remains undefined - as intended)
# a promise can be in.  The state is stored in this.state as read-only
STATE_PENDING   = _undefined
STATE_FULFILLED = 'fulfilled'
STATE_REJECTED  = 'rejected'

resolveClient = (c, arg) ->
  if typeof c.y == 'function'
    try
      yret = c.y.call(_undefined, arg)
      c.p.resolve yret
    catch err
      c.p.reject err
  else
    # pass this along...
    c.p.resolve arg
  return

rejectClient = (c, reason) ->
  if typeof c.n == 'function'
    try
      yret = c.n.call(_undefined, reason)
      c.p.resolve yret
    catch err
      c.p.reject err
  else
    # pass this along...
    c.p.reject reason
  return


class Promise
  constructor: (fn) ->
    if fn
      fn (arg) =>
        @resolve arg
      , (arg) =>
        @reject arg

  resolve: (value) ->
    if @state != STATE_PENDING
      return

    if value == @
      return @reject new TypeError 'Attempt to resolve promise with self'

    if value and (typeof value == 'function' or typeof value == 'object')
      try
        # First time through?
        first = true
        next = value.then

        if typeof next == 'function'
          # And call the value.then (which is now in "then") with value as the
          # context and the resolve/reject functions per thenable spec
          next.call value, (ra) =>
            if first
              first = false if first
              @resolve ra
            return
          , (rr) =>
            if first
              first = false
              @reject rr
            return
          return
      catch err
        @reject err if first
        return

    @state = STATE_FULFILLED
    @v     = value

    if clients = @c
      soon =>
        resolveClient c, value for c in clients
        return
    return

  reject: (reason) ->
    return if @state != STATE_PENDING

    @state = STATE_REJECTED
    @v     = reason

    if clients = @c
      soon ->
        rejectClient c, reason for c in clients
        return
    else if !Promise.suppressUncaughtRejectionError and typeof console != 'undefined'
      console.log 'Broken Promise, please catch rejections: ', reason, if reason then reason.stack else null

    return

  then: (onFulfilled, onRejected) ->
    p = new Promise

    client =
      y: onFulfilled
      n: onRejected
      p: p

    if @state == STATE_PENDING
      # We are pending, so client must wait - so push client to end of this.c
      # array (create if necessary for efficiency)
      if @c
        @c.push client
      else
        @c = [ client ]
    else
      s = @state
      a = @v
      soon ->
        # We are not pending, so yield script and resolve/reject as needed
        if s == STATE_FULFILLED
          resolveClient client, a
        else
          rejectClient client, a
        return
    p

  catch: (cfn) ->
    @then null, cfn

  finally: (cfn) ->
    @then cfn, cfn

  timeout: (ms, msg) ->
    msg = msg or 'timeout'

    new Promise (resolve, reject) =>
      setTimeout ->
        # This will fail silently if promise already resolved or rejected
        reject Error(msg)
      , ms

      # This will fail silently if promise already timed out
      @then (val) ->
        resolve val
        return
      , (err) ->
        reject err
        return
      return

  callback: (cb) ->
    if typeof cb is 'function'
      @then  (val) -> cb null, val
      @catch (err) -> cb err, null
    @

export default Promise
