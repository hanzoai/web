const watchExternalFilesPlugin = require('webpack-watch-files-plugin').default

const disable = false

const localModules = [
  //'../../../../hanzoai/react-sdk/packages/ui',
  //'../../../../hanzoai/react-sdk/packages/commerce'
]

const suffixes = [
  '/**/*.ts',
  '/**/*.tsx',
]

const flatArray = localModules.map((p) => {
  return suffixes.map((s) => (p + s))
}).flat()


module.exports = ( config ) => {

  if (disable) {
    return config
  }

  config.watchOptions = {
    poll: 1000,
    aggregateTimeout: 300,
  }
  config.plugins.push(
    new watchExternalFilesPlugin({
      files: flatArray,
    })
  )
  return config
}
