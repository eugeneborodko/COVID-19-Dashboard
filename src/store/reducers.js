import { combineReducers } from 'redux'
import { input } from './input/reducers'
import { country } from './country/reducers'
import { covid } from './covid/reducers'

export default combineReducers({
  input,
  country,
  covid,
})
