import { PUT_COVID_DATA } from './actions'

const initialState = {
  data: {},
}

export const covid = (state = initialState, action) => {
  switch (action.type) {
    case PUT_COVID_DATA:
      return {
        ...state,
        data: action.payload,
      }
  }

  return state
}
