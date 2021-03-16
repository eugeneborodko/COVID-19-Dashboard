import Country from './Country/Country'

import styles from './countries.module.scss'

const Countries = () => {
  return (
    <ul className={styles.countries}>
      <Country />
    </ul>
  )
}

export default Countries