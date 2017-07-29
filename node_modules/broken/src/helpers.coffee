import Promise from './promise'
import PromiseInspection from './promise-inspection'

export resolve = (val) ->
  z = new Promise
  z.resolve val
  z

export reject = (err) ->
  z = new Promise
  z.reject err
  z

export all = (ps) ->
  # Sesults and resolved count
  results = []
  rc      = 0
  retP    = new Promise()

  resolvePromise = (p, i) ->
    if !p or typeof p.then != 'function'
      p = resolve(p)

    p.then (yv) ->
      results[i] = yv
      rc++
      if rc == ps.length
        retP.resolve results
      return

    , (nv) ->
      retP.reject nv
      return

    return

  resolvePromise p, i for p, i in ps

  # For zero length arrays, resolve immediately
  if !ps.length
    retP.resolve results

  retP

export reflect = (promise) ->
  new Promise (resolve, reject) ->
    promise
      .then (value) ->
        resolve new PromiseInspection
          state: 'fulfilled'
          value: value
      .catch (err) ->
        resolve new PromiseInspection
          state: 'rejected'
          reason: err

export settle = (promises) ->
  all promises.map reflect
