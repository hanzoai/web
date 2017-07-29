import path from 'path'

export default (opts = {}) ->
  opts.plugins   ?= []
  opts.sourceMap ?= true

  try
    stylus = require 'stylus'
  catch err
    console.error 'Stylus unavailable, `npm install stylus` to transform Stylus files'
    return name: 'stylup-disabled'

  name: 'stylup'
  transform: (code, id) ->
    return if (path.extname id) != '.styl'

    relativePath = path.relative process.cwd(), id

    style = stylus code
    style.set 'filename', relativePath

    if opts.sourceMap
      style.set 'sourcemap', comment: false

    for plugin in opts.plugins
      try
        style.use plugin
      catch err
        console.error 'Failed to use plugin', plugin.toString()
        throw err

    new Promise (resolve, reject) ->
      style.render (err, css) ->
        return reject err if err?

        resolve
          id:   "#{id}.css"
          code: "export default #{JSON.stringify(css)};"
          map:  style.sourcemap
