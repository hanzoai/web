export default (opts = {}) ->
  try
    require.resolve 'sake-mocha'
  catch err
    console.warn 'sake-chai requires sake-mocha: `npm install sake-mocha --save-dev`'
