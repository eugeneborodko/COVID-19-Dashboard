export const LOAD_COVID_DATA = 'LOAD_COVID_DATA'
export const PUT_COVID_DATA = 'PUT_COVID_DATA'

export const loadCovidData = () => ({
  type: LOAD_COVID_DATA,
})

export const putCovidData = (data) => ({
  type: PUT_COVID_DATA,
  payload: data,
})
