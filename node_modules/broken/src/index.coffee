import PromiseInspection from './promise-inspection'
import Promise from './promise'
import soon from './soon'
import {all, reflect, reject, resolve, settle} from './helpers'

Promise.all = all
Promise.reflect = reflect
Promise.reject = reject
Promise.resolve = resolve
Promise.settle = settle
Promise.soon = soon

export default Promise
