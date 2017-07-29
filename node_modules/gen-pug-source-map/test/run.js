/* eslint-disable */

const genSourceMap = require('../')
const _pug    = require('pug')
const assert  = require('assert')
const path    = require('path')
const fs      = require('fs')

process.chdir(__dirname)

test2()

function createDir (path) {
  try {
    fs.mkdirSync(path)
  } catch (err) {
    if (err.code !== 'EEXIST') {
      throw err
    }
  }
}

function test2 () {
  const base = path.resolve(__dirname, 'fixtures/simple-include')
  const file = path.join(base, 'layout.pug')

  createDir('output')

  const code = _pug.compileFileClient(file, {
    doctype: 'html',
    basedir: 'fixtures/simple-include', // base,
    compileDebug: true,
    inlineRuntimeFunctions: false,
    pretty: true
  })

  fs.writeFileSync('output/app1-source.js', code, 'utf8')
  const packet = genSourceMap(file, code)

  assert(typeof packet.data == 'string')
  assert(typeof packet.map  == 'object')
  const result = packet.map

  // if you change the source please test the map and uncomment this once
  //fs.writeFileSync('./expected.json', JSON.stringify(result, null, 2), 'utf8')
  const expected = require('./expected.json')

  Object.keys(expected).forEach(function (k) {
    assert(String(expected[k]) === String(result[k]),
      'source map mismatch in property "' + k + '"\n' +
      'expected "' + result[k] + '"\n' +
      '   to be "' + expected[k] + '"\n'
    )
  })

  const output = packet.data
      .replace(' template(locals) {', ' template(locals,pug){') +
      '\n;module.exports=template;' +
      '\n//# sourceMappingURL=app1.js.map\n'

  fs.writeFileSync('output/app1.js', output, 'utf8')
  fs.writeFileSync('output/app1.js.map', JSON.stringify(packet.map), 'utf8')

  const fn = require('./output/app1.js')
  const html = fn(
    {
      items: [
        { name: 'Item one' },
        { name: 'Item two' },
        { name: 'Item tree' },
        { name: 'Item four' },
        { name: 'Item five' }
      ]
    }, _pug.runtime)

  fs.writeFileSync('output/index.html', html, 'utf8')
  console.log('Done.')
}
