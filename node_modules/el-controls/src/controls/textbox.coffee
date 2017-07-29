import Text from './text'
import html from '../../templates/controls/textarea'

class TextBox extends Text
  tag:         'textbox'
  html:         html
  formElement: 'textarea'

TextBox.register()

export default TextBox
