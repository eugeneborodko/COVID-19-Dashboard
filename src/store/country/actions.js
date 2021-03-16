export const LOAD_COUNTRY_DATA = 'LOAD_COUNTRY_DATA'
export const PUT_COUNTRY_DATA = 'PUT_COUNTRY_DATA'

export const loadCountryData = () => ({
  type: LOAD_COUNTRY_DATA,
})

export const putCountryData = (data) => ({
  type: PUT_COUNTRY_DATA,
  payload: data,
})
