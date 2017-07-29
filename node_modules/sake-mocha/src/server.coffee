import connect     from 'connect'
import http        from 'http'
import serveStatic from 'serve-static'

export default (opts) ->
  opts.port    ?= process.env.PORT ? 3333
  opts.dir     ?= process.cwd() + '/test/fixtures'
  opts.message ?= 'Run static server for tests'
  opts.name    ?= 'server'

  task opts.name, opts.message, (cb) ->
    app = connect()
    app.use serveStatic opts.dir
    http.createServer(app).listen opts.port, cb
