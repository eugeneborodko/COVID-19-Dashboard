import { Link } from 'react-router-dom'

import styles from './country.module.scss'

const Country = ({ flag, name, population }) => {
  population = population.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')

  return (
    <Link className={styles.country} to={`/${name}`}>
      <img
        className={styles.flag}
        src={flag}
        alt={name}
        width={55}
        height={40}
      />
      <h3 className={styles.name}>{name}</h3>
      <div className={styles.population}>
        <h4 className={styles.number}>{population}</h4>
        <h4 className={styles.text}>Population</h4>
      </div>
    </Link>
  )
}

export default Country
