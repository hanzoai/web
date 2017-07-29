require 'shortcake'

use 'cake-publish'
use 'cake-version'

task 'clean', 'clean project', ->
  exec 'rm -rf dist'

task 'build', 'build project', ->
  handroll = require 'handroll'

  bundle = yield handroll.bundle
    entry: 'src/browser.coffee'
  yield bundle.write format: 'es'

  bundle = yield handroll.bundle
    entry: 'src/performance-now.coffee'
  yield bundle.write format: 'cjs'

task 'watch', 'watch project', ->
  watch 'src/*.coffee', (filename) ->
    console.log filename, 'modified, rebuilding'
    invoke 'build' if not running 'build'
