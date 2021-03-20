import { useSelector, useDispatch } from 'react-redux'
import { useEffect } from 'react'
import { loadCountryData } from './../../store/country/actions'
import Country from './Country/Country'

import styles from './countries.module.scss'

const Countries = () => {
  const data = useSelector((state) => state.country.data)
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(loadCountryData())
  }, [dispatch])

  if (!data.length) {
    return <div className="loading">Loading...</div>
  }

  return (
    <>
      {!!data.length && (
        <div className={styles.countries}>
          {data.map((country, index) => {
            const { flag, name, population } = country
            return (
              <Country
                flag={flag}
                name={name}
                population={population}
                key={index}
              />
            )
          })}
        </div>
      )}
      {!data.length && <h2 className={styles.title}>No matches</h2>}
    </>
  )
}

export default Countries
