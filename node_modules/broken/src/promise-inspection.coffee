export default class PromiseInspection
  constructor: ({@state, @value, @reason}) ->

  isFulfilled: ->
    @state is 'fulfilled'

  isRejected: ->
    @state is 'rejected'
