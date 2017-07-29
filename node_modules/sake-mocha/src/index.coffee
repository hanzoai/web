import ci     from './ci'
import server from './server'
import test   from './test'
import watch  from './watch'

export default (opts = {}) ->
  ci     opts
  server opts
  test   opts
  watch  opts
