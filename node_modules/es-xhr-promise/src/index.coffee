###
# Copyright 2015 Scott Brady
# MIT License
# https://github.com/scottbrady/xhr-promise/blob/master/LICENSE
###

import Promise      from 'broken'
import objectAssign from 'es-object-assign'
import parseHeaders from './parse-headers'

defaults =
  method:   'GET'
  headers:  {}
  data:     null
  username: null
  password: null
  async:    true

###
# Module to wrap an XhrPromise in a promise.
###
class XhrPromise

  @DEFAULT_CONTENT_TYPE: 'application/x-www-form-urlencoded; charset=UTF-8'

  @Promise: Promise

  ##########################################################################
  ## Public methods #######################################################
  ########################################################################

  ###
  # XhrPromise.send(options) -> Promise
  # - options (Object): URL, method, data, etc.
  #
  # Create the XHR object and wire up event handlers to use a promise.
  ###
  send: (options = {}) ->
    options = objectAssign {}, defaults, options

    new Promise (resolve, reject) =>
      unless XMLHttpRequest
        @_handleError 'browser', reject, null, "browser doesn't support XMLHttpRequest"
        return

      if typeof options.url isnt 'string' || options.url.length is 0
        @_handleError 'url', reject, null, 'URL is a required parameter'
        return

      # XMLHttpRequest is supported by IE 7+
      @_xhr = xhr = new XMLHttpRequest()

      # success handler
      xhr.onload = =>
        @_detachWindowUnload()

        try
          responseText = @_getResponseText()
        catch
          @_handleError 'parse', reject, null, 'invalid JSON response'
          return

        resolve
          url:          @_getResponseUrl()
          headers:      @_getHeaders()
          responseText: responseText
          status:       xhr.status
          statusText:   xhr.statusText
          xhr:          xhr

      # error handlers
      xhr.onerror   = => @_handleError 'error',   reject
      xhr.ontimeout = => @_handleError 'timeout', reject
      xhr.onabort   = => @_handleError 'abort',   reject

      @_attachWindowUnload()

      xhr.open options.method, options.url, options.async, options.username, options.password

      if options.data? && !options.headers['Content-Type']
        options.headers['Content-Type'] = @constructor.DEFAULT_CONTENT_TYPE

      for header, value of options.headers
        xhr.setRequestHeader(header, value)

      try
        xhr.send(options.data)
      catch e
        @_handleError 'send', reject, null, e.toString()

  ###
  # XhrPromise.getXHR() -> XhrPromise
  ###
  getXHR: -> @_xhr

  ##########################################################################
  ## Psuedo-private methods ###############################################
  ########################################################################

  ###
  # XhrPromise._attachWindowUnload()
  #
  # Fix for IE 9 and IE 10
  # Internet Explorer freezes when you close a webpage during an XHR request
  # https://support.microsoft.com/kb/2856746
  #
  ###
  _attachWindowUnload: ->
    @_unloadHandler = @_handleWindowUnload.bind(@)
    window.attachEvent 'onunload', @_unloadHandler if window.attachEvent

  ###
  # XhrPromise._detachWindowUnload()
  ###
  _detachWindowUnload: ->
    window.detachEvent 'onunload', @_unloadHandler if window.detachEvent

  ###
  # XhrPromise._getHeaders() -> Object
  ###
  _getHeaders: ->
    parseHeaders @_xhr.getAllResponseHeaders()

  ###
  # XhrPromise._getResponseText() -> Mixed
  #
  # Parses response text JSON if present.
  ###
  _getResponseText: ->
    # Accessing binary-data responseText throws an exception in IE9
    responseText = if typeof @_xhr.responseText is 'string' then @_xhr.responseText else ''

    switch @_xhr.getResponseHeader('Content-Type')
      when 'application/json', 'text/javascript'
        # Workaround Android 2.3 failure to string-cast null input
        responseText = JSON.parse(responseText + '')

    responseText

  ###
  # XhrPromise._getResponseUrl() -> String
  #
  # Actual response URL after following redirects.
  ###
  _getResponseUrl: ->
    return @_xhr.responseURL if @_xhr.responseURL?

    # Avoid security warnings on getResponseHeader when not allowed by CORS
    return @_xhr.getResponseHeader('X-Request-URL') if /^X-Request-URL:/m.test(@_xhr.getAllResponseHeaders())

    ''

  ###
  # XhrPromise._handleError(reason, reject, status, statusText)
  # - reason (String)
  # - reject (Function)
  # - status (String)
  # - statusText (String)
  ###
  _handleError: (reason, reject, status, statusText) ->
    @_detachWindowUnload()

    reject
      reason:     reason
      status:     status     or @_xhr.status
      statusText: statusText or @_xhr.statusText
      xhr:        @_xhr

  ###
  # XhrPromise._handleWindowUnload()
  ###
  _handleWindowUnload: ->
    @_xhr.abort()

export default XhrPromise
