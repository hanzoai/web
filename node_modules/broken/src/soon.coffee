import {_undefined, _undefinedString} from './utils'

# See http://www.bluejava.com/4NS/Speed-up-your-Websites-with-a-Faster-setTimeout-using-soon
# This is a very fast "asynchronous" flow control - i.e. it yields the thread
# and executes later, but not much later. It is far faster and lighter than
# using setTimeout(fn,0) for yielding threads.  Its also faster than other
# setImmediate shims, as it uses Mutation Observer and "mainlines" successive
# calls internally.
#
# WARNING: This does not yield to the browser UI loop, so by using this
#          repeatedly you can starve the UI and be unresponsive to the user.
#
# This is an even FASTER version of https://gist.github.com/bluejava/9b9542d1da2a164d0456
# that gives up passing context and arguments, in exchange for a 25x speed
# increase. (Use anon function to pass context/args)
soon = do ->
  # Function queue
  fq         = []

  # Avoid using shift() by maintaining a start pointer - and remove items in
  # chunks of 1024 (bufferSize)
  fqStart    = 0
  bufferSize = 1024

  callQueue = ->
    # This approach allows new yields to pile on during the execution of these
    while fq.length - fqStart
      try
        # No context or args...
        fq[fqStart]()
      catch err
        unless typeof console is 'undefined'
          console.error err

      # Increase start pointer and dereference function just called
      fq[fqStart++] = _undefined

      if fqStart == bufferSize
        fq.splice 0, bufferSize
        fqStart = 0

    return

  # Run the callQueue function asynchronously, as fast as possible
  cqYield = do ->
    # This is the fastest way browsers have to yield processing
    if typeof MutationObserver != _undefinedString
      # First, create a div not attached to DOM to 'observe'
      dd = document.createElement 'div'
      mo = new MutationObserver callQueue
      mo.observe dd, attributes: true

      return ->
        dd.setAttribute 'a', 0
        return

    # If No MutationObserver - this is the next best thing - handles Node and MSIE
    if typeof setImmediate != _undefinedString
      return ->
        setImmediate callQueue
        return

    # Final fallback - shouldn't be used for much except very old browsers
    ->
      setTimeout callQueue, 0
      return


  # This is the function that will be assigned to soon it takes the function to
  # call and examines all arguments.
  (fn) ->
    # Push the function and any remaining arguments along with context
    fq.push fn

    # Upon adding our first entry, kick off the callback
    if fq.length - fqStart == 1
      cqYield()
    return

export default soon
