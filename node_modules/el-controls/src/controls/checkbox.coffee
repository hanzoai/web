import Control from './control'

import html from '../../templates/controls/checkbox'

export default class Checkbox extends Control
  tag: 'checkbox'
  html: html
  getValue: (event)->
    return event.target.checked

Checkbox.register()

