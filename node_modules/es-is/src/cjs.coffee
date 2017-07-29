import * as es from './index'

# Classic exports
exports =
  type:         es.isType
  defined:      es.isDefined
  empty:        es.isEmpty
  equal:        es.isEqual
  hosted:       es.isHosted
  'instanceof': es.isInstanceOf
  instance:     es.isInstanceOf
  nil:          es.isNull
  null:         es.isNull
  undefined:    es.isUndefined
  undef:        es.isUndefined
  'arguments':  es.isArguments
  args:         es.isArguments
  array:        es.isArray
  arraylike:    es.isArrayLike
  bool:         es.isBool
  false:        es.isFalse
  true:         es.isTrue
  date:         es.isDate
  element:      es.isElement
  error:        es.isError
  function:     es.isFunction
  fn:           es.isFunction
  number:       es.isNumber
  infinite:     es.isInfinite
  decimal:      es.isDecimal
  divisibleBy:  es.isDivisibleBy
  integer:      es.isInteger
  maximum:      es.isMax
  max:          es.isMax
  minimum:      es.isMin
  min:          es.isMin
  nan:          es.isNaN
  even:         es.isEven
  odd:          es.isOdd
  ge:           es.isGe
  gt:           es.isGt
  le:           es.isLe
  lt:           es.isLt
  within:       es.isWithin
  object:       es.isObject
  primitive:    es.isPrimitive
  promise:      es.isPromise
  hash:         es.isHash
  regexp:       es.isRegExp
  string:       es.isString
  base64:       es.isBase64
  hex:          es.isHex
  symbol:       es.isSymbol

exports.args.empty       = es.isEmptyArguments
exports.arguments.empty  = es.isEmptyArguments
exports.array.empty      = es.isEmptyArray
exports.date.valid       = es.isValidDate

for k,v of es
  exports[k] = v

export default exports
