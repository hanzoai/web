'use strict'

var SourceMapGenerator = require('source-map').SourceMapGenerator
var path = require('path')

function relative (basedir, fname) {
  return path.relative(basedir, fname).replace(/\\/g, '/')
}

/*
  Pug give us the sources in `var pug_debug_sources = { ... };\n`
*/
function extractSources (compiledLines) {
  var debugSrc = 'var pug_debug_sources = {'
  var sources  = false

  for (var ix = 0; ix < compiledLines.length; ix++) {
    var line = compiledLines[ix]
    if (line.slice(-2) !== '};') continue

    var pos = line.indexOf(debugSrc)
    if (~pos) {
      pos += debugSrc.length
      try {
        sources = JSON.parse(line.slice(pos - 1, -1))
        compiledLines[ix] = line.slice(0, pos) + '};'
      } catch (err) {
        // eslint-disable-next-line no-console
        console.error(err + ' (extractSources)')
        sources = false
      }
      break
    }
  }

  return sources
}

/*
  Adds the given filename to sourcesContent, as relative to basedir
*/
function addSourceContent (generator, basedir, fname, debugSources) {
  var source = debugSources[fname]
  generator.setSourceContent(relative(basedir, fname), source || null)
}

/*
  Generates the pair code / sourcemap
*/
function genPugSourceMap (filename, source, compiled, options) {

  if (arguments.length < 3) {
    compiled = source
  } else if (arguments.length < 4 && compiled && typeof compiled == 'object') {
    options  = compiled
    compiled = source
  }

  var opts = options || {}
  var basedir = opts.root

  basedir  = basedir ? path.resolve(path.normalize(basedir)) : process.cwd()
  filename = path.resolve(basedir, path.normalize(filename))

  var reLineAndPath = /;pug_debug_line = ([0-9]+);pug_debug_filename = "([^"]*)";/
  var reEntryPoint  = /^function [$\w]+\(locals\)\{var pug_html\s*=/
  var compiledLines = compiled.split('\n')
  var debugSources  = extractSources(compiledLines)
  var matchedFiles  = {}
  var lineCount = 0
  var lastLine = -1

  if (!debugSources) {
    throw new Error('Cannot get the source code. Please compile with compileDebug:true.')
  }

  var mapGenerator = new SourceMapGenerator({
    file: relative(basedir, filename) + '.js'
  })

  // allow breakpoints in 1st line, better support is in To Do
  if (reEntryPoint.test(compiledLines[0])) {
    mapGenerator.addMapping({
      generated: { line: 1, column: 0 },
      original: { line: 1, column: 0 },
      source: relative(basedir, filename)
    })
  }

  compiledLines.forEach(function (line, lineno) {
    lineCount++

    var match = line.match(reLineAndPath)
    if (!match) return

    var originalLine = ~~match[1]
    if (originalLine <= 0) return

    // avoid normalize the path here to match the name in debugSources
    var fname = match[2] && match[2].replace(/\\u002F/g, '/').replace(/\\\\/g, '\\')
    if (!fname) fname = filename

    var matchedLines = matchedFiles[fname]
    if (!matchedLines) {
      // new include file - add source content
      matchedFiles[fname] = matchedLines = []

      if (!opts.excludeContent) {
        addSourceContent(mapGenerator, basedir, fname, debugSources)
      }
    }

    // remove pug debug line from generated code, adjust line counter
    if (!opts.keepDebugLines) {
      var len = match[0].length

      compiledLines[lineno] = line.length === len ? ''
                            : line.slice(0, match.index) + line.slice(match.index + len)
      if (!compiledLines[lineno].trim()) {
        compiledLines[lineno] = '\0'
        lineCount--
      }
    }

    // have a recognized generated line?
    if (!/^;pug_debug/.test(compiledLines[lineno + 1])) {
      var generatedLine = lineCount + 1

      lastLine = lineno + 1
      if (compiledLines[lastLine].slice(0, 2) === '//' &&
          compiledLines[lastLine + 1] === ';(function(){') {
        generatedLine++
        lastLine++
      }

      // adds the new mapping if line is not matched yet
      if (matchedLines.indexOf(originalLine) < 0) {
        matchedLines.push(originalLine)
        mapGenerator.addMapping({
          generated: {
            line: generatedLine,
            column: 0
          },
          original: {
            line: originalLine,
            column: 0
          },
          source: relative(basedir, fname)
        })
      }
    }
  })

  // use the resulting non-empty lines to recreate the code
  if (!opts.keepDebugLines) {

    // split the last row having the root catch clause
    if (~lastLine) {
      var line = compiledLines[lastLine]
      var pos = line.lastIndexOf(';}.call(this,') + 1
      if (pos && line.lastIndexOf('rethrow(err,') > pos) {
        compiledLines[lastLine] = line.slice(0, pos) + '\n' + line.slice(pos)
      }
    }

    compiled = compiledLines.filter((line) => line !== '\0').join('\n')
  }

  return { data: compiled, map: mapGenerator.toJSON() }
}

module.exports = genPugSourceMap
