import fs from 'fs'
import {join, dirname} from 'path'

export default ->
  new Promise (resolve, reject) ->
    try
      require 'npm'
      resolve(true)
    catch err
      if /log.gauge.isEnabled/.test err.stack.toString()
        console.log 'Attempting to fix npm...'
        npmPath = join (dirname require.resolve 'npm'), '../'
        npmLog  = join npmPath, 'node_modules', 'npmlog'

        fs.exists npmLog, (exists) ->
          if exists
            cmd = "rm -rf #{npmLog}"
            console.log cmd
            exec cmd
              .then  resolve
              .catch reject
          else
            reject 'Unable to apply npmfix'
