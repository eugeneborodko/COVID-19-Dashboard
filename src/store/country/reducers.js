import { PUT_COUNTRY_DATA } from './actions'

const initialState = {
  data: {},
}

export const country = (state = initialState, action) => {
  if (action.type === PUT_COUNTRY_DATA) {
    return {
      ...state,
      data: action.payload,
    }
  }

  return state
}
