export const LOAD_COVID_DATA = 'LOAD_COVID_DATA'
export const PUT_COVID_DATA = 'PUT_COVID_DATA'
// export const LOAD_COVID_DETAILS_DATA = 'LOAD_COVID_DETAILS_DATA'
// export const PUT_COVID_DETAILS_DATA = 'PUT_COVID_DETAILS_DATA'

export const loadCovidData = () => ({
  type: LOAD_COVID_DATA,
})

export const putCovidData = (data) => ({
  type: PUT_COVID_DATA,
  payload: data,
})

// export const loadCovidDetailsData = () => ({
//   type: LOAD_COVID_DETAILS_DATA,
// })

// export const putCovidDetailsData = (data) => ({
//   type: PUT_COVID_DETAILS_DATA,
//   payload: data,
// })
