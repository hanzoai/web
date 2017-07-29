import El           from 'el.js'
import Events       from  '../events'

scrolling = false

export default class Control extends El.Input
  errorHtml: '<div class="error" if="{ errorMessage }">{ errorMessage }</div>'
  init: ->
    super

  getValue: (event) ->
    return $(event.target).val()?.trim()

  error: (err) ->
    if err instanceof DOMException
      console.log 'WARNING: Error in riot dom manipulation ignored:', err
      return

    super

    if !scrolling && $(@root).offset().top <= $(window).scrollTop()
      scrolling = true
      $('html, body').animate
        scrollTop: $(@root).offset().top - $(window).height()/2
      ,
        complete: ->
          scrolling = false
        duration: 500
    @mediator.trigger Events.ChangeFailed, @input.name, @input.ref.get @input.name

  change: ->
    super
    @mediator.trigger Events.Change, @input.name, @input.ref.get @input.name

  changed: (value) ->
    @mediator.trigger Events.ChangeSuccess, @input.name, value
    El.scheduleUpdate()

  value: ->
    return @input.ref @input.name
