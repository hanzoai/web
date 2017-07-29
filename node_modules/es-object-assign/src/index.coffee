getOwnSymbols = Object.getOwnPropertySymbols

toObject = (val) ->
  if val == null or val == undefined
    throw new TypeError('Object.assign cannot be called with null or undefined')
  Object val

shouldUseNative = ->
  try
    return false unless Object.assign

    # Detect buggy property enumeration order in older V8 versions.

    # https://bugs.chromium.org/p/v8/issues/detail?id=4118
    test1 = new String('abc')
    test1[5] = 'de'
    return false if Object.getOwnPropertyNames(test1)[0] == '5'

    # https://bugs.chromium.org/p/v8/issues/detail?id=3056
    test2 = {}
    for i in [0..9]
      test2['_' + String.fromCharCode(i)] = i
    order2 = Object.getOwnPropertyNames(test2).map (n) -> test2[n]
    return false if order2.join('') != '0123456789'

    # https://bugs.chromium.org/p/v8/issues/detail?id=3056
    test3 = {}
    for letter in 'abcdefghijklmnopqrst'.split('')
      test3[letter] = letter
    if Object.keys(Object.assign({}, test3)).join('') != 'abcdefghijklmnopqrst'
      return false
    true
  catch err
    # We don't expect any of the above to throw, but better to be safe.
    false

export default objectAssign = do ->
  return Object.assign if shouldUseNative()

  (target, sources...) ->
    to = toObject target

    for source in sources
      from = Object(source)
      for key of from
        if Object::hasOwnProperty.call(from, key)
          to[key] = from[key]
      if getOwnSymbols
        for symbol in getOwnSymbols(from)
          if Object::propIsEnumerable.call from, symbol
            to[symbol] = from[symbol]
    to
