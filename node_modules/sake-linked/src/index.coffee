import path from 'path'
import {fs} from 'mz'

export default (opts = {}) ->
  dir = opts.dir ? process.cwd()
  dir = dir.replace 'node_modules', ''
  dir = path.join dir, 'node_modules'

  task 'linked', 'show linked packages', ->
    files = yield fs.readdir dir
    for file in files
      stats = yield fs.lstat path.join dir, file
      if stats.isSymbolicLink()
        console.log file
