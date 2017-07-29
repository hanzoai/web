version = (coffee) ->
  parseInt (coffee.VERSION.split '.')[0], 10

# Find specific version of CoffeeScript
export default findCoffee = (wanted = 1) ->
  for pkg in ['coffeescript', 'coffee-script']
    try
      coffee = require pkg
      return coffee if (version coffee) == wanted
    catch err
  throw new Error 'Unable to find CoffeeScript matching version ' + wanted
