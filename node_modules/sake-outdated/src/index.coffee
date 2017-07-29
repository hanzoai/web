import path from 'path'

import npmFix from './npmfix'
import update from './update'
import {gitOk, log, needsUpdate, stripNcu} from './utils'


export default (opts = {}) ->
  opts.commit ?= true

  if Array.isArray opts.ignore
    opts.ignore = opts.ignore.join ','
  else
    opts.ignore ?= null

  # Find path to node-check-updates binary
  # TODO: Figure out why npm does not correctly symlink it's binary
  ncuPath = path.dirname (require.resolve 'npm4-check-updates')
  ncuBin  = path.join ncuPath, '../bin/ncu'
  ncu     = if opts.ignore? then "#{ncuBin} -x #{opts.ignore}" else ncuBin

  task 'outdated', 'show outdated packages', ->
    return unless yield npmFix()

    {stdout, stderr, status} = yield exec.quiet ncu
    log stdout, stderr
    process.exit status if status != 0

  task 'outdated:update', 'update outdated packages', ->
    return unless yield npmFix()
    return unless yield gitOk()

    {stdout, stderr, status} = yield exec.quiet ncu + ' -u'
    log stdout, stderr
    process.exit status if status != 0

    if needsUpdate stdout
      yield update stdout if opts.commit

  task 'outdated:all', 'update all outdated packages', ->
    return unless yield npmFix()
    return unless yield gitOk()

    {stdout, stderr, status} = yield exec.quiet ncu + ' -u -a'

    # ncu erroneously logs message to use -a even when you use -a, strip that
    stdout = stripNcu stdout

    log stdout, stderr
    process.exit status if status != 0

    if needsUpdate stdout
      yield update stdout if opts.commit
