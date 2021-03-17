import { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { totalCovidData } from './../../utils/totalCovidData'
import { loadCovidData } from './../../store/covid/actions'

import styles from './preview.module.scss'

const Preview = () => {
  const data = useSelector((state) => state.covid.data)
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(loadCovidData())
  }, [])

  if (!data) {
    return <div>Loading...</div>
  }

  return (
    <>
      <h1 className={styles.title}>Coronavirus Dashboard</h1>
      {!!Object.keys(data).length && (
        <div className={styles.preview}>
          {totalCovidData.map((item, index) => {
            const { TotalDeaths, TotalConfirmed, TotalRecovered } = data.Global
            const arr = [TotalDeaths, TotalConfirmed, TotalRecovered]
            return (
              <div
                className={`${styles['item']} ${styles[`item${item.id}`]}`}
                key={item.id}
              >
                <h2 className={styles.number}>
                  {arr[index].toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')}
                </h2>
                <p className={styles.text}>{item.text}</p>
              </div>
            )
          })}
        </div>
      )}
    </>
  )
}

export default Preview
