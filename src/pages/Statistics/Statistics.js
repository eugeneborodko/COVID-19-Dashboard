import { useParams } from 'react-router-dom'
import { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { covidDetailsData } from './../../utils/covidDetailsData'
import { loadCovidData } from './../../store/covid/actions'

import styles from './statistics.module.scss'

const Statistics = () => {
  const data = useSelector((state) => state.covid.data)
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(loadCovidData())
  }, [dispatch])

  let { countryName } = useParams()

  if (!Object.keys(data).length) {
    return <div>Loading...</div>
  }

  const filtered = []

  return (
    <>
      <div className="container">
        <h1 className={styles.title}>{countryName} statistics</h1>
        <p
          className={styles.text}
        >{`Data is current as of ${new Date()
          .toLocaleDateString()
          .replace(/\//g, '.')}`}</p>
        {filtered.push(
          data.Countries.filter((country) => {
            const regex = new RegExp(country.Country)
            return countryName.match(regex)
          }),
        )}
        {filtered[0].length && (
          <table className={styles.table}>
            <tbody>
              {covidDetailsData.map((item, index) => {
                const {
                  Country,
                  CountryCode,
                  NewConfirmed,
                  TotalConfirmed,
                  NewDeaths,
                  TotalDeaths,
                  NewRecovered,
                  TotalRecovered,
                } = filtered[0][0]
                const arr = [
                  Country,
                  CountryCode,
                  NewConfirmed,
                  TotalConfirmed,
                  NewDeaths,
                  TotalDeaths,
                  NewRecovered,
                  TotalRecovered,
                ]

                return (
                  <tr className={styles.row} key={item.id}>
                    <td className={styles.excel}>{item.name}</td>
                    <td className={styles.excel}>{arr[index]}</td>
                  </tr>
                )
              })}
            </tbody>
          </table>
        )}
        {!filtered[0].length && <div>No data</div>}
      </div>
    </>
  )
}

export default Statistics
