# sake-outdated

[![npm][npm-img]][npm-url]
[![build][build-img]][build-url]
[![dependencies][dependencies-img]][dependencies-url]
[![downloads][downloads-img]][downloads-url]
[![license][license-img]][license-url]
[![chat][chat-img]][chat-url]

Add `outdated` and `outdated:update` tasks to your Sakefile. Automatically
update node.js dependencies.

## Install
```bash
$ npm install sake-outdated --save-dev
```

## Usage
```javascript
use('sake-outdated', {
    commit: true,       // automatically commit changes to git
    ignore: ['jquery'], // optionally ignore packages
})
```

## License
[BSD][license-url]

[build-img]:        https://img.shields.io/travis/sakejs/sake-outdated.svg
[build-url]:        https://travis-ci.org/sakejs/sake-outdated
[chat-img]:         https://badges.gitter.im/join-chat.svg
[chat-url]:         https://gitter.im/sakejs/chat
[coverage-img]:     https://coveralls.io/repos/sakejs/sake-outdated/badge.svg?branch=master&service=github
[coverage-url]:     https://coveralls.io/github/sakejs/sake-outdated?branch=master
[dependencies-img]: https://david-dm.org/sakejs/sake-outdated.svg
[dependencies-url]: https://david-dm.org/sakejs/sake-outdated
[downloads-img]:    https://img.shields.io/npm/dm/sake-outdated.svg
[downloads-url]:    http://badge.fury.io/js/sake-outdated
[license-img]:      https://img.shields.io/npm/l/sake-outdated.svg
[license-url]:      https://github.com/sakejs/sake-outdated/blob/master/LICENSE
[npm-img]:          https://img.shields.io/npm/v/sake-outdated.svg
[npm-url]:          https://www.npmjs.com/package/sake-outdated
