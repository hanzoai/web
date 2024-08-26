import currencies from './data'

const currencySeparator = '.'
const digitsOnlyRe = new RegExp('[^\\d.-]', 'g')

const currencySigns = currencies.data

export const signs = currencySigns

// Does the currency support decimal notation
export const isZeroDecimal = (c: string) => {
  let code = c
  if (code) { code = code.toLowerCase() }

  if ((code === 'bif') || (code === 'clp') || (code === 'djf') || (code === 'gnf') || (code === 'jpy') || (code === 'kmf') || (code === 'krw') || (code === 'mga') || (code === 'pyg') || (code === 'rwf') || (code === 'vnd') || (code === 'vuv') || (code === 'xaf') || (code === 'xof') || (code === 'xpf')) {
    return true
  }
  return false
}

// Convert data format to humanized format
export const renderUICurrencyFromJSON = (c: string, j: number) => {
  let code = c
  let jsonCurrency: any = j
  if (code) { code = code.toLowerCase() }

  if (Number.isNaN(jsonCurrency)) {
    jsonCurrency = 0
  }

  const currentCurrencySign = currencySigns[code as keyof typeof currencySigns] ?? ''

  // ethereum
  if ((code === 'eth') || (code === 'btc') || (code === 'xbt')) {
    jsonCurrency /= 1e9
    return currentCurrencySign + jsonCurrency
  }

  jsonCurrency = `${jsonCurrency}`
  // jsonCurrency is not cents
  if (isZeroDecimal(code)) {
    return currentCurrencySign + jsonCurrency
  }

  // jsonCurrency is cents
  while (jsonCurrency.length < 3) {
    jsonCurrency = `0${jsonCurrency}`
  }

  return `${currentCurrencySign}${jsonCurrency.substr(0, jsonCurrency.length - 2)}.${jsonCurrency.substr(-2)}`
}
// Convert data format to number
export const renderNumericCurrencyFromJSON = (c: string, j: any) => {
  let code = c
  let jsonCurrency = j
  if (code) { code = code.toLowerCase() }

  if (Number.isNaN(jsonCurrency)) {
    jsonCurrency = 0
  }
  // ethereum
  if ((code === 'eth') || (code === 'btc') || (code === 'xbt')) {
    jsonCurrency /= 1e9
    return jsonCurrency
  }

  jsonCurrency = `${jsonCurrency}`
  // jsonCurrency is not cents
  if (isZeroDecimal(code)) {
    return jsonCurrency
  }

  // jsonCurrency is cents
  while (jsonCurrency.length < 3) {
    jsonCurrency = `0${jsonCurrency}`
  }

  return parseFloat(`${jsonCurrency.substr(0, jsonCurrency.length - 2)}.${jsonCurrency.substr(-2)}`)
}

// Convert humanized format to data format
export const renderJSONCurrencyFromUI = (c: any, uC: any) => {
  let code: any = c
  const uiCurrency: any = uC ? `${uC}` : '0'
  if (code) { code = code.toLowerCase() }

  // ethereum
  if ((code === 'eth') || (code === 'btc') || (code === 'xbt')) {
    return parseFloat((`${uiCurrency}`).replace(digitsOnlyRe, '')) * 1e9
  }

  if (isZeroDecimal(code)) {
    return parseInt((`${uiCurrency}`).replace(digitsOnlyRe, '').replace(currencySeparator, ''), 10)
  }

  // uiCurrency is a whole unit of currency
  const parts = uiCurrency.split(currencySeparator)
  if (parts.length > 1) {
    parts[1] = parts[1].substr(0, 2)
    while (parts[1].length < 2) {
      parts[1] += '0'
    }
  } else {
    parts[1] = '00'
  }

  return parseInt(((parseFloat(parts[0].replace(digitsOnlyRe, '')) * 100) + parseFloat(parts[1].replace(digitsOnlyRe, ''))).toString(), 10)
}
// Is the currency code a crypto currency?
export const isCrypto = (code: any) => ((code === 'eth') || (code === 'btc') || (code === 'xbt'))

// Convert humanized currency format to data format back to currency format
export const renderUpdatedUICurrency = (c: any, uiCurrency: any) => {
  let code = c
  if (code) { code = code.toLowerCase() }

  return renderUICurrencyFromJSON(code, renderJSONCurrencyFromUI(code, uiCurrency))
}
