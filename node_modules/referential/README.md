# referential

[![npm][npm-img]][npm-url]
[![build][build-img]][build-url]
[![dependencies][dependencies-img]][dependencies-url]
[![downloads][downloads-img]][downloads-url]
[![license][license-img]][license-url]
[![chat][chat-img]][chat-url]

> Refer to mutable state safely.

Referential makes it easy to share mutable state safely. A `Ref` to an object
or subtree always refers to the same underlying data regardless how it's
mutated.

Heavily optimized for reads.

### Motivating example
```javascript
var state = {a: {b: {c: "world"}}}

var render = (function() {
    var template = state.a.b.c;
    return function() {
        return "Hello " + template
    }
}())

state.a.b.c = "This will be lost on you."

console.log(render()) // Hello world
```

## Install
```bash
$ npm install referential
```

## Usage
```javascript
refer = require('referential')

// Create a reference
ref = refer({a: 1})

// Get underlying value of reference
ref()    // {a: 1}
ref('a') // 1

// Mutate state
ref.set('b', 2) // {a: 1, b: 2}
ref.set({c: 3}) // {a: 1, b: 2, c: 3}

// Extend state
ref.extend({c: {d: 1, e: 2}}) // {a: 1, b: 2, c: {d: 1, e: 2}}
ref.extend({c: {d: 3}})       // {a: 1, b: 2, c: {d: 3, e: 2}}

// Create entire tree as needed
ref.set('d.e.f', 4) // {a: 1, b: 2, c: 3, d: {e: {f: 4}}}

// Get reference to subtree
ref2 = ref.refer('d.e')
ref2() // {f: 4}

// Mutate subtree (and update parent)
ref2.set('g', 5)
ref2() // {f: 4, g: 5}

// Mutate parent (and update subtree)
ref.set('d.e.f', 6)
ref()  // {a: 1, b: 2, c: 3, d: {e: {f: 6, g: 5}}}
ref2() // {f: 6, g: 5}

// Clone ref, create new tree
ref3 = ref2.clone()
ref3.set('g', 6)
ref3() // {f: 6, g: 6}
ref2() // {f: 6, g: 5}
```

Check the tests for [more examples][examples].

## License
[MIT][license-url]

[examples]:         https://github.com/zeekay/referential/blob/master/test/test.coffee

[build-img]:        https://img.shields.io/travis/zeekay/referential.svg
[build-url]:        https://travis-ci.org/zeekay/referential
[chat-img]:         https://badges.gitter.im/join-chat.svg
[chat-url]:         https://gitter.im/zeekay/hi
[coverage-img]:     https://coveralls.io/repos/zeekay/referential/badge.svg?branch=master&service=github
[coverage-url]:     https://coveralls.io/github/zeekay/referential?branch=master
[dependencies-img]: https://david-dm.org/zeekay/referential.svg
[dependencies-url]: https://david-dm.org/zeekay/referential
[downloads-img]:    https://img.shields.io/npm/dm/referential.svg
[downloads-url]:    http://badge.fury.io/js/referential
[license-img]:      https://img.shields.io/npm/l/referential.svg
[license-url]:      https://github.com/zeekay/referential/blob/master/LICENSE
[npm-img]:          https://img.shields.io/npm/v/referential.svg
[npm-url]:          https://www.npmjs.com/package/referential
