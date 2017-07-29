# sake-bundle

[![npm][npm-img]][npm-url]
[![build][build-img]][build-url]
[![dependencies][dependencies-img]][dependencies-url]
[![downloads][downloads-img]][downloads-url]
[![license][license-img]][license-url]
[![chat][chat-img]][chat-url]

Add `bundle` task and global to your Sakefile. Bundle up your JavaScript apps
using [Handroll](https://github.com/zeekay/handroll).

## Install
```bash
$ npm install sake-bundle --save-dev
```

## Usage
```javascript
use('sake-bundle')

task('build', 'build project', => {
  bundle.write({entry: 'src/index.js'})
})
```

## License
[BSD][license-url]

[build-img]:        https://img.shields.io/travis/sakejs/sake-bundle.svg
[build-url]:        https://travis-ci.org/sakejs/sake-bundle
[chat-img]:         https://badges.gitter.im/join-chat.svg
[chat-url]:         https://gitter.im/sakejs/chat
[coverage-img]:     https://coveralls.io/repos/sakejs/sake-bundle/badge.svg?branch=master&service=github
[coverage-url]:     https://coveralls.io/github/sakejs/sake-bundle?branch=master
[dependencies-img]: https://david-dm.org/sakejs/sake-bundle.svg
[dependencies-url]: https://david-dm.org/sakejs/sake-bundle
[downloads-img]:    https://img.shields.io/npm/dm/sake-bundle.svg
[downloads-url]:    http://badge.fury.io/js/sake-bundle
[license-img]:      https://img.shields.io/npm/l/sake-bundle.svg
[license-url]:      https://github.com/sakejs/sake-bundle/blob/master/LICENSE
[npm-img]:          https://img.shields.io/npm/v/sake-bundle.svg
[npm-url]:          https://www.npmjs.com/package/sake-bundle
