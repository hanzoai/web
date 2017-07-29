import semver from 'semver'

export default ->
  new Promise (resolve, reject) ->
    exec.quiet 'npm outdated --json'
      .then ({stdout}) ->
        return resolve null if stdout == ''

        deps     = JSON.parse stdout
        outdated = []

        for k,v of deps
          # Refuse to allow versions to be updated if all dependencies are not
          # installed.
          if v.latest == 'MISSING'
            return reject new Error 'Missing dependencies'

          # Skip linked and/or git packages, we're not THAT smart
          continue if v.wanted && v.latest == 'git'
          continue if v.wanted == v.latest == 'linked'

          if semver.gt v.current, v.wanted
            outdated.push
              name:    k
              current: v.current
              wanted:  v.wanted

        if outdated.length
          resolve outdated
        else
          resolve null

      .catch (err) ->
        reject (err)
