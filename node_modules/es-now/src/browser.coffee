export default do ->
  if performance? and performance.now
    now = -> performance.now()
  else
    now = -> Date.now() - loadTime
    loadTime = new Date().getTime()
  now
