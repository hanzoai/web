# Changes for gen-pug-source-map

### 2016-11-06 v0.1.2

- The returned object contains a raw source map in its `map` property, instead the JSON string of previous versions.
- Now, the generator raises an exception if the input does not contains debug information.
- First attempt to support the entry point of the template, information not provided by the pug compiler.

### 2016-10-32 v0.1.0

Complete rewrite, many fixes, almost ready for production

- The new property `basedir` allows to define the root directory of the source files.
- Source file names are relative to `basedir` or the current directory if `basedir` is not given.
- Fix: reading source files multiple times, now source is extracted from the compiled code.
- Fix: sometimes the line number is shifted by one.
- Better code cleanup, removal of empty lines.
- Basic but complete test.

### 2016-10-32 v0.1.0

Initial release
