import {
  PUT_COUNTRY_DATA,
  CHANGE_COUNTRY_DATA,
  PUT_COPIED_COUNTRY_DATA,
} from './actions'

const initialState = {
  data: [],
  clonedData: [],
}

export const country = (state = initialState, action) => {
  switch (action.type) {
    case PUT_COUNTRY_DATA:
      return {
        ...state,
        data: action.payload,
      }
    case CHANGE_COUNTRY_DATA:
      const regex = new RegExp(action.payload)
      console.log(regex)
      const data = state.clonedData.filter((country) =>
        country.name.toLowerCase().match(regex),
      )
      return {
        ...state,
        data,
      }
    case PUT_COPIED_COUNTRY_DATA:
      return {
        ...state,
        clonedData: action.payload,
      }
  }

  return state
}
