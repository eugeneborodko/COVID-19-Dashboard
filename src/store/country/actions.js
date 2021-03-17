export const LOAD_COUNTRY_DATA = 'LOAD_COUNTRY_DATA'
export const PUT_COUNTRY_DATA = 'PUT_COUNTRY_DATA'
export const PUT_COPIED_COUNTRY_DATA = 'PUT_COPIED_COUNTRY_DATA'
export const CHANGE_COUNTRY_DATA = 'CHANGE_COUNTRY_DATA'

export const loadCountryData = () => ({
  type: LOAD_COUNTRY_DATA,
})

export const putCountryData = (data) => ({
  type: PUT_COUNTRY_DATA,
  payload: data,
})

export const putCopiedCountryData = (data) => ({
  type: PUT_COPIED_COUNTRY_DATA,
  payload: data,
})

export const changeCountryData = (value) => ({
  type: CHANGE_COUNTRY_DATA,
  payload: value,
})
