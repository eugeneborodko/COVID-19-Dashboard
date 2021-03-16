import { CHANGE_INPUT_VALUE, RESET_INPUT_VALUE } from './actions'

const initialState = {
  value: '',
}

export const input = (state = initialState, action) => {
  switch (action.type) {
    case CHANGE_INPUT_VALUE:
      return {
        ...state,
        value: action.payload,
      }
    case RESET_INPUT_VALUE:
      return {
        ...state,
        value: '',
      }
  }

  return state
}
