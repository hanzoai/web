# find-coffee

[![npm][npm-img]][npm-url]
[![build][build-img]][build-url]
[![dependencies][dependencies-img]][dependencies-url]
[![downloads][downloads-img]][downloads-url]
[![license][license-img]][license-url]
[![chat][chat-img]][chat-url]

Helper to find locally installed copies of [CoffeeScript][coffeescript].

## Install
```bash
$ npm install find-coffee --save
```

## Usage
```javascript
import findCoffee from 'find-coffee'

// Find CoffeeScript v2
const coffee = findCoffee(2)
```

## License
[MIT][license-url]

[coffeescript]:     http://coffeescript.org

[build-img]:        https://img.shields.io/travis/zeekay/find-coffee.svg
[build-url]:        https://travis-ci.org/zeekay/find-coffee
[chat-img]:         https://badges.gitter.im/join-chat.svg
[chat-url]:         https://gitter.im/zeekay/hi
[coverage-img]:     https://coveralls.io/repos/zeekay/find-coffee/badge.svg?branch=master&service=github
[coverage-url]:     https://coveralls.io/github/zeekay/find-coffee?branch=master
[dependencies-img]: https://david-dm.org/zeekay/find-coffee.svg
[dependencies-url]: https://david-dm.org/zeekay/find-coffee
[downloads-img]:    https://img.shields.io/npm/dm/find-coffee.svg
[downloads-url]:    http://badge.fury.io/js/find-coffee
[license-img]:      https://img.shields.io/npm/l/find-coffee.svg
[license-url]:      https://github.com/zeekay/find-coffee/blob/master/LICENSE
[npm-img]:          https://img.shields.io/npm/v/find-coffee.svg
[npm-url]:          https://www.npmjs.com/package/find-coffee
