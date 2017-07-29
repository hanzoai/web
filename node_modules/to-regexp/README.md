# to-regexp
Turns wild card-style glob (`'foo*'`) and stringified regular expressions (`'/foo.*/'`) into RegExp objects.

## Install
```bash
npm install to-regexp
```

## Usage
```javascript
var toRegExp = require('to-regexp');

var re = toRegExp('foo*');
re.test('foo'); // true
re.test('foobar'); // true

var re = toRegExp('/foo.*/');
re.test('foo'); // true
re.test('foobar'); // true
```
