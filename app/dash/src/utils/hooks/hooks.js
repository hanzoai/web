import midstream from 'midstream'
import { isFunction } from '@/utils/isFunction'
import { useState } from 'react'

export const useMidstream = (config, opts) => {
  const [dst, setDst] = useState(() => opts.dst || opts.destination || {})
  const [err, setErr] = useState(() => opts.err || opts.errors || {})

  // standard force rerender hack
  const [, setTick] = useState(0)

  const [ms] = useState(() => {
    let tick = 0

    return midstream(config, {
      dst: (name, value) => {
        if (isFunction(dst)) {
          dst(name, value)
        } else {
          dst[name] = value
        }
        setTick(tick++)
      },
      // err behaves just like dst
      err: (name, value) => {
        if (isFunction(err)) {
          err(name, value)
        } else {
          err[name] = value
        }
        setTick(tick++)
      },
    })
  })

  const ret = { ...ms }

  return Object.assign(ret, {
    get dst() {
      return dst
    },
    get errors() {
      return err
    },
  })
}

export const foo = 1
