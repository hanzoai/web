export default (opts) ->
  task 'test:ci', 'Run tests', (opts) ->
    invoke 'test', bail: true, coverage: true, ci: true
