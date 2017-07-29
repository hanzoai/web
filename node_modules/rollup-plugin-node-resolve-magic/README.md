# rollup-plugin-node-resolve-magic [![NPM version][npm-img]][npm-url] [![Build Status][travis-img]][travis-url] [![Coverage Status][coveralls-img]][coveralls-url] [![Dependency Status][dependency-img]][dependency-url] [![Gitter chat][gitter-img]][gitter-url]

Locate modules using the [Node resolution
algorithm](https://nodejs.org/api/modules.html#modules_all_together), for using
third party modules in `node_modules`. Differs in the following ways from
[rollup-plugin-node-resolve](rollup-plugin-node-resolve):
- Automatically degrades from 'module' -> 'jsnext:main' -> 'main' -> 'index.js'
- Correctly resolves symlinked packages.
- Prefers entry-module basedir as basedir for resolution (ideal for bundled
  apps, prevents duplication of shared modules).

Originally developed as part of [Handroll](https://github.com/zeekay/handroll).

## Install
```bash
$ npm install rollup-plugin-node-resolve-magic --save-dev
```

## Usage
Add the following code to your project's `rollup.config.js`:

```js
import nodeResolve from 'rollup-plugin-node-resolve-magic';

export default {
  entry: 'index.js',
  plugins: [
    nodeResolve({
      // defaults
      basedir:        path.dirname('index.js'),
      browser:        false,
      extensions:     ['.js', '.json', '.coffee', '.pug', '.styl'],
      preferBuiltins: true,
      skip:           []
    })
  ]
};
```

## License
MIT

[travis-img]:     https://img.shields.io/travis/zeekay/rollup-plugin-node-resolve-magic.svg
[travis-url]:     https://travis-ci.org/zeekay/rollup-plugin-node-resolve-magic
[coveralls-img]:  https://coveralls.io/repos/zeekay/rollup-plugin-node-resolve-magic/badge.svg?branch=master&service=github
[coveralls-url]:  https://coveralls.io/github/zeekay/rollup-plugin-node-resolve-magic?branch=master
[dependency-url]: https://david-dm.org/zeekay/rollup-plugin-node-resolve-magic
[dependency-img]: https://david-dm.org/zeekay/rollup-plugin-node-resolve-magic.svg
[npm-img]:        https://img.shields.io/npm/v/rollup-plugin-node-resolve-magic.svg
[npm-url]:        https://www.npmjs.com/package/rollup-plugin-node-resolve-magic
[gitter-img]:     https://badges.gitter.im/join-chat.svg
[gitter-url]:     https://gitter.im/zeekay/hi

<!-- not used -->
[downloads-img]:     https://img.shields.io/npm/dm/rollup-plugin-node-resolve-magic.svg
[downloads-url]:     http://badge.fury.io/js/rollup-plugin-node-resolve-magic
[devdependency-img]: https://david-dm.org/zeekay/rollup-plugin-node-resolve-magic/dev-status.svg
[devdependency-url]: https://david-dm.org/zeekay/rollup-plugin-node-resolve-magic#info=devDependencies
