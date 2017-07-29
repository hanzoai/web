export default (opts = {}) ->
  opts.git ?= true
  opts.npm ?= true

  task 'publish', 'publish project', ->
    cmds = []

    if opts.npm
      cmds.push 'npm publish'

    if opts.git? and opts.git != false
      unless opts.git.tags == false
        cmds.push 'git push --tags'

      if opts.git == true
        cmds.push 'git push'
      else
        {force, remote, refspec} = opts.git
        if remote?
          respec  = if refspec?      then refspec else ''
          force   = if force == true then '-f'    else ''
          cmds.push "git push #{force} #{remote} #{refspec}"

    exec.parallel cmds
