import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { changeInputValue, resetInputValue } from './../../store/input/actions'

import styles from './input.module.scss'

const Input = () => {
  const value = useSelector((state) => state.input.value)
  const dispatch = useDispatch()
  const ref = React.createRef()
  return (
    <div className={styles.container}>
      <input
        className={styles.input}
        type="text"
        placeholder="Search for a country"
        value={value}
        ref={ref}
        autoFocus
        onChange={(event) => {
          dispatch(changeInputValue(event.target.value))
        }}
      />
      <button
        className={styles.reset}
        onClick={() => {
          dispatch(resetInputValue())
          ref.current.focus()
        }}
      >
        Reset
      </button>
    </div>
  )
}

export default Input
