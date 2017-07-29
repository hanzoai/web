# rollup-plugin-stylup

[![Build Status](https://travis-ci.org/zeekay/rollup-plugin-stylup.svg?branch=master)](https://travis-ci.org/zeekay/rollup-plugin-stylup)

A Rollup.js plugin to compile Stylus.

## Install

```bash
npm install rollup-plugin-stylup --save-dev
```

## Usage

Add the following code to your project's `rollup.config.js`:

```js
import stylup from 'rollup-plugin-stylup';

export default {
  entry: 'index.js',
  plugins: [
    stylup({
      plugins: [],
    })
  ]
};
```

## License

MIT
