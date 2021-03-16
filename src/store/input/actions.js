export const CHANGE_INPUT_VALUE = 'CHANGE_INPUT_VALUE'
export const RESET_INPUT_VALUE = 'RESET_INPUT_VALUE'

export const changeInputValue = (value) => ({
  type: CHANGE_INPUT_VALUE,
  payload: value,
})

export const resetInputValue = () => ({
  type: RESET_INPUT_VALUE,
})
