# es-is <sup>[![Version Badge][npm-version-svg]][npm-url]</sup>

[![Build Status][travis-svg]][travis-url]
[![dependency status][deps-svg]][deps-url]
[![dev dependency status][dev-deps-svg]][dev-deps-url]
[![License][license-image]][license-url]
[![Downloads][downloads-image]][downloads-url]

[![npm badge][npm-badge-png]][npm-url]

[![browser support][testling-png]][testling-url]

ES Module friendly fork of the definitive [JavaScript type testing library][is].

To be or not to be? This is the library!

## Installation

As a node.js module

```shell
$ npm install es-is --save
```

## Importing and usage with bundlers
Due to limitations with bundlers, rather than `import {isFunction} from 'es-is'`
it's recommended that you import from module directly: `import isFunction from
'es-is/function`. Hopefully as tree-shaking becomes more sophisticated, this
will become unnecessary.

## API

### general

 - ``is.a`` (value, type) or ``is.type`` (value, type)
 - ``is.defined`` (value)
 - ``is.empty`` (value)
 - ``is.equal`` (value, other)
 - ``is.hosted`` (value, host)
 - ``is.instance`` (value, constructor)
 - ``is.instanceof`` (value, constructor) - deprecated, because in ES3 browsers, "instanceof" is a reserved word
 - ``is.nil`` (value)
 - ``is.null`` (value) - deprecated, because in ES3 browsers, "null" is a reserved word
 - ``is.undef`` (value)
 - ``is.undefined`` (value) - deprecated, because in ES3 browsers, "undefined" is a reserved word

### arguments

 - ``is.args`` (value)
 - ``is.arguments`` (value) - deprecated, because "arguments" is a reserved word
 - ``is.args.empty`` (value)

### array

 - ``is.array`` (value)
 - ``is.array.empty`` (value)
 - ``is.arraylike`` (value)

### boolean

 - ``is.bool`` (value)
 - ``is.boolean`` (value) - deprecated, because in ES3 browsers, "boolean" is a reserved word
 - ``is.false`` (value) - deprecated, because in ES3 browsers, "false" is a reserved word
 - ``is.true`` (value) - deprecated, because in ES3 browsers, "true" is a reserved word

### date

 - ``is.date`` (value)

### element

 - ``is.element`` (value)

### error

 - ``is.error`` (value)

### function

 - ``is.fn`` (value)
 - ``is.function`` (value) - deprecated, because in ES3 browsers, "function" is a reserved word

### number

 - ``is.number`` (value)
 - ``is.infinite`` (value)
 - ``is.decimal`` (value)
 - ``is.divisibleBy`` (value, n)
 - ``is.integer`` (value)
 - ``is.int`` (value) - deprecated, because in ES3 browsers, "int" is a reserved word
 - ``is.maximum`` (value, others)
 - ``is.minimum`` (value, others)
 - ``is.nan`` (value)
 - ``is.even`` (value)
 - ``is.odd`` (value)
 - ``is.ge`` (value, other)
 - ``is.gt`` (value, other)
 - ``is.le`` (value, other)
 - ``is.lt`` (value, other)
 - ``is.within`` (value, start, finish)

### object

 - ``is.object`` (value)

### regexp

 - ``is.regexp`` (value)

### string

 - ``is.string`` (value)

### encoded binary

 - ``is.base64`` (value)
 - ``is.hex`` (value)

### ES6 Symbols
 - ``is.symbol`` (value)


## License
[MIT][license-url]

[is]: https://github.com/enricomarino/is
[npm-url]: https://npmjs.org/package/es-is
[npm-version-svg]: http://versionbadg.es/zeekay/es-is.svg
[travis-svg]: https://travis-ci.org/zeekay/es-is.svg
[travis-url]: https://travis-ci.org/zeekay/es-is
[deps-svg]: https://david-dm.org/zeekay/es-is.svg
[deps-url]: https://david-dm.org/zeekay/es-is
[dev-deps-svg]: https://david-dm.org/zeekay/es-is/dev-status.svg
[dev-deps-url]: https://david-dm.org/zeekay/es-is#info=devDependencies
[testling-png]: https://ci.testling.com/zeekay/es-is.png
[testling-url]: https://ci.testling.com/zeekay/es-is
[npm-badge-png]: https://nodei.co/npm/es-is.png?downloads=true&stars=true
[license-image]: http://img.shields.io/npm/l/es-is.svg
[license-url]: LICENSE
[downloads-image]: http://img.shields.io/npm/dm/es-is.svg
[downloads-url]: http://npm-stat.com/charts.html?package=es-is
