import fs   from 'fs'
import path from 'path'

import outdated from './outdated'

export default (opts = {}) ->
  task 'version:major', 'increment major version', ['version'], ->
  task 'version:minor', 'increment minor version', ['version'], ->
  task 'version:patch', 'increment patch version', ['version'], ->

  task 'version', 'change version of project', (opts) ->
    {stdout, stderr} = yield exec.quiet 'git status --porcelain'
    if stderr or stdout
      console.log 'working directory not clean'
      process.exit 1

    # Check for outdated deps
    if (deps = yield outdated())?
      for dep in deps
        console.error "#{dep.name} #{dep.current} is installed but #{dep.wanted} is specified in package.json"
      process.exit 1

    # Run build process
    if opts.before? and tasks.has opts.before
      yield invoke opts.before

    dir        = process.cwd()
    pkgPath    = path.join dir, 'package.json'
    readmePath = path.join dir, 'README.md'

    pkg        = require pkgPath
    version    = pkg.version

    level = (opts.arguments.filter (v) -> v isnt 'version')[0]
    [major, minor, patch] = (parseInt n for n in version.split '.')

    switch level
      when 'version:major', 'major'
        newVersion = "#{major + 1}.0.0"
      when 'version:minor', 'minor'
        newVersion = "#{major}.#{minor + 1}.0"
      when 'version:patch', 'patch'
        newVersion = "#{major}.#{minor}.#{patch + 1}"
      else
        console.log 'Unable to parse versioning'
        process.exit 1

    console.log "v#{version} -> v#{newVersion}"
    console.log

    data = fs.readFileSync readmePath, 'utf8'
    data = data.replace (new RegExp version, 'g'), newVersion
    fs.writeFileSync readmePath, data, 'utf8'

    pkg.version = newVersion
    fs.writeFileSync pkgPath, (JSON.stringify pkg, null, 2), 'utf8'

    yield exec """
    git add .
    git commit -m #{newVersion}
    git tag v#{newVersion}
    """
