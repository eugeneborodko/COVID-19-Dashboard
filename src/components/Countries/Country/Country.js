import styles from './country.module.scss'

const Country = () => {
  return (
    <li className={styles.country}>
      <div className={styles.image} />
      <h3 className={styles.name}>Country Name</h3>
      <div className={styles.population}>
        <h4 className={styles.number}>10,000, 000</h4>
        <h4 className={styles.text}>Population</h4>
      </div>
    </li>
  )
}

export default Country
