export default (opts) ->
  task 'test:watch', 'watch for changes and re-run tests', ->
    invoke 'watch'

    require('vigil').watch __dirname, (filename, stats) ->
      if /^src/.test filename
        invoke 'test'

      if /^test/.test filename
        invoke 'test', test: filename
