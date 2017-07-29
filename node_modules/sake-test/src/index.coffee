import chai  from 'sake-chai'
import mocha from 'sake-mocha'

export default (opts = {}) ->
  chai(opts)
  mocha(opts)
