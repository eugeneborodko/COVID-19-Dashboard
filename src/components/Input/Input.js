import styles from './input.module.scss'

const Input = () => {
  return (
    <input className={styles.input} type="text" placeholder="Search for a country" autoFocus />
  )
}

export default Input