import { combineReducers } from 'redux'
import { input } from './input/reducers'
import { country } from './country/reducers'

export default combineReducers({
  input,
  country,
})
